//TENNIS BAR GRAPH

var chart = c3.generate({
  bindto: '#chart',
  size:{
    height: 520
  },
  data: {
    x: 'x',
    columns: [ //the 'x' is how I wrote the coordinates on the x axis 
      ['x', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
      ['Prize Money for Women', .43, .4625, .486, .535, .5605, .600, .625, .700, .750, .850, 1, 1.1, 1.15, 1.6, 1.76, 1.88]
    ],
      type: 'bar'
  },
  bar: {
    // or
    width: 25 // this makes bar width 100px
  },
  axis: { //labeling the axis
    x: {
      label: 'Years'
    },
    y: {
      label: 'Wimbledon Championship Prize in Millions of Dollars',
    }
  },
  color:{ //changing the colors of the columns
    pattern:['#50aaf4', '#33507a']
  }

});

setTimeout(function () { //this makes the men's data come up second
  chart.load({
    columns: [
      ['Prize Money for Men', .4775, .500, .525, .575, .6025, .630, .655, .70, .75, .85, 1.00, 1.10, 1.15, 1.60, 1.76, 1.88]
    ]
  })
}, 1000);


//SOCCER BAR GRAPH
var chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    x: 'x',
    columns: [ //the 'x' is how I wrote the coordinates on the x axis 
      ['x', '2015', '2016', '2017', '2018'],
      ['NWSL Salary Cap', .265, .278, .30, .315]
    ],
      type: 'bar'
  },
  size:{
    height: 520
  },
  bar: {
    // or
    width: 25 // this makes bar width 100px
  },
  axis: { //labeling the axis
    x: {
      label: 'Years'
    },
    y: {
      label: 'Salary Cap in Millions of Dollars'
    }
  },
  color:{
    pattern:['#50aaf4', '#33507a']
  }
  
});

setTimeout(function () { //this makes the men's data come up second
  chart2.load({
    columns: [
      ['MLS Salary Cap', 3.49, 3.66, 3.845, 4.035]
    ]
  })
}, 1000);

//BASKETBALL BAR GRAPH
var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
      x: 'x',
      columns: [ //the 'x' is how I wrote the coordinates on the x axis 
        ['x', '2014', '2015', '2016', '2017', '2018'],
        ['WNBA Salary Cap', .1075, .1095, .1115, .1135, .1155]
      ],
        type: 'bar'
    },
    size:{
      height: 520
    },
    bar: {
      // or
      width: 25 // this makes bar width 100px
    },
    axis: { //labeling the axis
      x: {
        label: 'Years'
      },
      y: {
        label: 'Salary Cap in Millions of Dollars'
      }
    },
    color:{
      pattern:['#50aaf4', '#33507a']
    }
  });
  
  setTimeout(function () { //this makes the men's data come up second
    chart3.load({
      columns: [
        ['NBA Salary Cap', 63.065, 70, 94.143999, 99.093000, 99.093000]
      ]
    })
  }, 1000);
