# Play for Equal Pay

-------
### by Gracie Meisel
### April 25, 2019

![Gracie Meisel](images/firstshot.png?raw=true "Gracie Meisel")
![Gracie Meisel](images/shot2.png?raw=true "Gracie Meisel")
![Gracie Meisel](images/shot3.png?raw=true "Gracie Meisel")

### Conceptual Description
This project is an extension of my sketch for Critique 3. Both sketches focus on the pay disparities between men and women in professional basketball, soccer, and tennis. I loved playing sports growing up, and it became apparent to me at a young age the ways in which female athletes were devalued - and not just at a professional level. Because of my passion for sports and my awareness of the present gender inequalities, I wanted to visualize data that showed the pay disparities between men and women in professional sports. I chose three sports that offered three different pictures. Prize money for men and women for one of the biggest professional tennis tournaments - Wimbledon - is equal now, while the difference between salary caps for male and female basketball teams is so extreme that it is hard to even see the female data due to the wide range on the y-axis. Professional soccer lies somewhere in between the two. My hope is that this piece allows the viewer to learn about an important topic in an interactive and informative way, as well as show them that pay equity in professional sports is possible.

### Interaction Description
I image my piece as an accessible resource on the internet that teaches viewers about the present inequalities. My piece is viewed most easily on a computer, and it would take figuring out how to fix the relative height of the graphs to make it suitable for smart phones (which the c3 community has not yet figured out how to do). The intented audience, therefore, is anyone who uses the internet. This piece could come up when someone searches about professional sports or pay for male and female athletes. I also can imagine it as something you can click on on Facebook or Instagram with the jumbotron bootstrap pictured as the click bait. 

As I mentioned in my write-up for Critique 3, it is important to me that I created a piece of art that did not intimidate or overwhlem the viewer from learning more about a controversial topic. I find that when intense backgrounds or imaging accompanies controversial information, it can cause viewers to pull back from the information and become defensive. To help the viewer focus on the information at its core rather than the reaction they may have to gender inequality more generally, I decided to make the information presented seem like a newspaper. I intend for the viewer to either scroll through the newspaper (scroll down the page) and view the different graphs, or they can click on the tabs (the colors of which I chose to look like part of the newspaper) to skip to a specific sport's graph. The jumbotron bootstrap (the section with text at the top of the artwork) serves as an introductory explanation of the artwork, and helps the reader digest what they are going to be looking at. 

I included a newspaper article from when Billie Jean King beat Bobby Riggs in the "Battle of the Sexes," when the women's U.S. soccer team won the World Cup in 2015, and when the Women's National Basketball Association was created as the backgrounds for the tennis graph, soccer graph, and basketball graph, respectively. Although the viewer can easily see the headings of the articles in the newspapers, I didn't want the image to detract from the graphs and that is why I blurred them out in the background. I also thought blurred images looked better aesthetically. 

I chose the colors of the columns of graphs themselves to match the jumbotron bootsrap, and I thought they complemented the black and white newspaper articles very nicely. I wanted the piece to have a sort of border to make it look cleaner and more finished, which is why I had the navy color wrap around the newspaper articles/graphs. I also really liked the two blue column colors together, and I deliberately didn't have the women's data in pink and the men's data in blue. My color choices were not based on gender stereotypes, but rather what I found to be aesthetically pleasing. When the viewer clicks on the column labels, they can see the men's and women's data separately, which is helpful because the women's data sometimes cannot be seen on a graph that is scaled to include all of the men's data (i.e., the basketball graph). If the viewer scrolls over the columns, information about the exact amount of monetary compensation as well as the year pops up. This makes the information much more digestible and allows for the viewer to interact with the data itself. 

### Extension
Although I kept the theme and data the same from my last critique, the visual presentation is pretty different. I really loved the idea of scrolling through a newspaper and absorbing this information, and so I chose to include three newspaper articles as the background onto which the graphs are presented. This was much more of a headache than anticipated, but I am really happy with how it turned out. I also added a bootstrap introduction/header called a jumbotron to explain the premise of the project, which I did not include before. With this jumbotron, I created three buttons to more easily navigate to the graphs rather than scrolling (if the viewer chooses to interact with the piece in that way). 

Aesthetically, I completed changed the piece. I changed the fonts to a more informational font, and I changed the color scheme to be all blues to complement the black and white news articles. To me, these changes make it look much more polished. 

### Sketch of Extended Piece 
![Gracie Meisel](images/drawing.png?raw=true "Gracie Meisel")

### Technical Details 
The libraries I used are:
    - c3.css
    - d3.js
    - p5.js

The hosting platform is Gihub Pages. 

To create the bar graphs, I used c3.generate and set my charts as variables (var = chart, chart2, or chart3.). c3.generate allows you to input the data, place the data into columns, indicate the type of graph you wish to create, label the axes, and play with the colors. To have the men’s data appear after the women’s data, I used setTimeout(function(){}) and loaded that part of the data second. 
![Gracie Meisel](images/code1.png?raw=true "Gracie Meisel")
![Gracie Meisel](images/code2.png?raw=true "Gracie Meisel")

To position the charts, I put my css in my html and indicated each chart's position and used transform: translate to move them around the page. Within the css, I also placed the color of the bootstrap jumbotron and the color of the font used in the jumbotron. 

To actually create the jumbotron, I used a bootstrap example called "jumbotron" and made a separate div class for the jumbotron, in which I put the text and the buttons. Specifically, I used an <a class> for the buttons and attached each chart to their corresponding button using href=”#chart” within the <a class>.
![Gracie Meisel](images/code3.png?raw=true "Gracie Meisel")

I also made separate classes for the charts in order to more easily manipulate them, and I inserted the newspaper article images one after the other using img src=”name of image.png”.