import React from 'react';

class Person
{
    id = 0
    name = ""
    address = ""
    describtion = ""
    edit_hidden = true
    constructor (id: number, name: string, address: string, describtion: string)
    {
        this.id = id
        this.name = name
        this.address = address
        this.describtion = describtion
        this.edit_hidden = true
    }
    edit = () =>
    {
        this.edit_hidden = false
    }
    edit_name = (e: any) =>
    {
        this.name = e.target.value
    }
    edit_address = (e: any) =>
    {
        this.address = e.target.value
    }
    edit_describtion = (e: any) =>
    {
        this.describtion = e.target.value
    }
}

type Properties = 
{
    people: Person[],
    submit: (person: Person) => {},
}

type State =
{
    id: number,
    name: string,
    address: string,
    describtion: string,
    people: Person[], 
    blad: string,
    zapisz_disabled: boolean
}

export class Zad18 extends React.Component<{}, State> {
    name_ref: any
    address_ref: any
    describtion: any
    describtion_ref: any
    people: any
    constructor(props: Properties)
    {
        super(props)
        this.state = {
            id: 1,
            name: "",
            address: "",
            describtion: "",
            people: [{ id: 0, name: "Kamil", address: "https://google.com", describtion: "opis", edit_hidden: true, edit: () => { }, edit_name: () => { }, edit_address: () => { }, edit_describtion: () => { }}],
            blad: "",
            zapisz_disabled: true
        };
        this.name_ref = React.createRef()
        this.address_ref = React.createRef()
        this.describtion_ref = React.createRef()
        this.people = [{ id: 0, name: "Kamil", address: "https://google.com", describtion: "opis" }]
    }

    setName = (e: any) => {
        this.setState({ name: e.target.value })
        if (this.state.name == ""
        || this.state.address == ""
        || this.state.describtion == "") 
        {
            this.setState({ zapisz_disabled: true })
        }
        if (this.state.name != ""
        && this.state.address != ""
        && this.state.describtion != "")
            this.setState({ zapisz_disabled: false })
    }

    setAddress = (e: any) => {
        this.setState({ address: e.target.value })
        if (this.state.name == ""
        || this.state.address == ""
        || this.state.describtion == "") 
        {
            this.setState({ zapisz_disabled: true })
        }
        if (this.state.name != ""
        && this.state.address != ""
        && this.state.describtion != "")
            this.setState({ zapisz_disabled: false })
    }

    setDescribtion = (e: any) => {
        this.setState({ describtion: e.target.value })
        if (this.state.name == ""
        || this.state.address == ""
        || this.state.describtion == "") 
        {
            this.setState({ zapisz_disabled: true })
        }
        if (this.state.name != ""
        && this.state.address != ""
        && this.state.describtion != "")
            this.setState({ zapisz_disabled: false })
    }

    clearForm = () => {
        this.name_ref.current.value = ""
        this.address_ref.current.value = ""
        this.describtion_ref.current.value = ""
        this.setState
        ({
            name: "",
            address: "",
            describtion: ""
        })
        this.setState({ zapisz_disabled: true })
    }

    sendForm = () =>
    {
        if (this.state.name!=""
        && this.state.address!=""
        && this.state.describtion!="")
        {
            this.clearForm()
            this.setState({ blad: "" })
            this.setState({ id: this.state.id + 1 })
            let person = new Person
            (
                this.state.id,
                this.state.name /*albo this.name_ref.current.value*/,
                this.state.address /*albo this.address_ref.current.value*/,
                this.state.describtion /*albo this.describtion_ref.current.value*/
            )
            this.people.push(person)
            this.setState({people: this.people})
            this.setState({ zapisz_disabled: true })
        }
        else
            this.setState({blad: "Proszę podać wszystkie dane!"})
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" name="name" ref={this.name_ref} onChange={this.setName}/>
                    <input type="text" name="address" ref={this.address_ref} onChange={this.setAddress}/>
                    <input type="textarea" name="describtion" ref={this.describtion_ref} onChange={this.setDescribtion}/>
                    <input type="button" onClick={this.sendForm} disabled={this.state.zapisz_disabled} value="Wyślij"/>
                    <input type="button" onClick={this.clearForm} value="Anuluj"/>
                    <p>{this.state.blad}</p>
                </form>
                <ol>
                    {
                        this.state.people.map
                        (
                            p => 
                            <li>
                                <span>{p.id} </span>
                                <span><a href={p.address}>{p.name}</a> </span>
                                <span>{p.describtion}</span>
                                <input type="button" onClick={p.edit} value="Edytuj"/>
                                <div hidden={p.edit_hidden}>
                                    <input type="text" onChange={p.edit_name} value={p.name}/>
                                    <input type="text" onChange={p.edit_address} value={p.address}/>
                                    <input type="textarea" onChange={p.edit_describtion} value={p.describtion}/>
                                </div>
                            </li>
                        )
                    }
                </ol>
                <br></br>
            </>
        );
    }
}