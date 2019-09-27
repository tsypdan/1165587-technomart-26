"use strict";

$('#slider1').range2DSlider({
  width: '180px',
  template:'horizontal',
  value:[[0,0],[30000,0]],
  showLegend:false,
  onlyGridPoint:false,
  round:true,
  alwShowTooltip:[false,false],
  axis:[[0,45000]]
});
