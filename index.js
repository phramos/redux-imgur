
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {

    var state = store.getState();
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;

    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    }else{
        document.getElementById('status').innerHTML = "loaded";
    }

    if(state.images.loading) {
        document.getElementById('imagesStatus').innerHTML = "is loading...";
    } else {
        document.getElementById('imagesStatus').innerHTML = "loaded";
    }

    if (state.images.data.length != 0) {
        var imagesHtml = '';
        var imagesArr = state.images.data;
        
        imagesArr.forEach(function (element, index) {
           imagesHtml += '<div id="image'+ index +'">';
            imagesHtml += '<p>' + element.title + '</p>';
            imagesHtml += '<img src="'+element.link +'"/>';
           imagesHtml += '</div>';

        });
        document.getElementById('imagesList').innerHTML = imagesHtml;
    }


}
store.subscribe(render);
// ~end step 1.3
render();
