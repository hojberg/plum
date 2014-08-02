var dataStructure = {
  update: function (newData) {
    return mix(plum(newData), this);
  }
};

var deepFreeze = function (obj) {
};

var deepClone = function (obj) {
};

var _mix = function (a, b) {
  var c = {};
  var key;

  for (key in a) {
    c[key] = a[key];
  }

  for (key in b) {
    c[key] = b[key];
  }

  return c;
};

var mix = function (a, b) {
  return _mix(deepClone(a), deepClone(b));;
};

var createDataStructure = function (data) {
  return deepFreeze(mix(dataStructure, data));
};

var plum = function (data) {
  return createDataStructure(data);
};

export default plum;


// ---- notes

internal sync queue?

// ----- test

var salesByCoverSync = plum.createSync();


var ServersRouteTarget = {

  salesPerCover: function (reqest) {
    var salesByCover = plum({ id: request.params.id })

    salesByCover.initially({
      React.renderComponent(
        <SalesPerCover salesPerCover={salesPerCover}/>
        document.querySelector('body')
      );
    });

    salesByCover.syncVia(salesByCoverSync);
  }

});

var SalesPerCover = React.createClass({
  render: function () {
    
  }
});
