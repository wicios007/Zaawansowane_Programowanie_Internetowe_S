import matplotlib.pyplot as plt
import numpy as np
import math
from random import randrange
from numpy import random
a = np.linspace(0, 6, 2)
losowaa=np.random.random([3])*10
losowab=randrange(20)
print(losowaa)
# Note that even in the OO-style, we use `.pyplot.figure` to create the figure.
fig, ax = plt.subplots()  # Create a figure and an axes.
t=np.arange(-2*math.pi,2*math.pi)
x=np.arange(0,6)
ax.plot(a, losowaa[a], label='Wykres 1')  # Plot more data on the axes...

ax.set_xlabel('x label')  # Add an x-label to the axes.
ax.set_ylabel('y label')  # Add a y-label to the axes.
ax.set_title("Simple Plot")  # Add a title to the axes.
#ax.set_xticks(np.arange(0, 2, step=0.2)) 
ax.legend()  # Add a legend
plt.show()
