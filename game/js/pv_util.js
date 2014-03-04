/**
* @author       Alexander B. Bierbrauer <abierbrauer@polyvision.org>
* @copyright    2014 Alexander B. Bierbrauer, polyvision UG (haftungsbeschränkt)
*/

function http_get(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function load_objects_from_tiled_map(url,name){
	var json_data = JSON.parse(http_get(url));
	var objects_to_return = new Array();

	for(var layers = 0; layers < json_data['layers'].length; layers++){
		current_layer = json_data['layers'][layers];
		if(current_layer['type'] == "objectgroup" && current_layer['name'] == name){
			for(var o = 0; o < current_layer['objects'].length; o++){
				current_layer_object = current_layer['objects'][o];

				to = new Object();
				to['x'] = current_layer_object['x'];
				to['y'] = current_layer_object['y'];
				objects_to_return.push(to);
			}
			
		}
	}
	return objects_to_return;
}