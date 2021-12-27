import { Zad12_context } from "./Context"

export var Zad12vol1 = () => {
    return (
        <Zad12_context.Consumer>
            {({hyperlinks, viewDescription}) => (
                <div>
                    <ol>
                        {
                            hyperlinks.map
                            (
                                h => <li><a href={h.src} onClick={() => viewDescription(h.id)}>{h.name}</a></li>
                            )
                        }
                    </ol>
                </div>
            )}
        </Zad12_context.Consumer>
    );
}
export default Zad12vol1