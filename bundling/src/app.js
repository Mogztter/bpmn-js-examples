// we use stringify to inline an example XML document
import pizzaDiagram from '../resources/pizza-collaboration.bpmn';


// make sure you added bpmn-js to your your project
// dependencies via npm install --save bpmn-js
import BpmnViewer from 'bpmn-js';

var viewer = new BpmnViewer({
  container: '#canvas'
});

try {

  viewer.importXML(pizzaDiagram).then(function(result) {

    const { warnings } = result;

    console.log('success !', warnings);
    
    viewer.get('canvas').zoom('fit-viewport');
  });
} catch(err) {

  const { warnings, message } = err;

  console.log('something went wrong:', warnings, message);
}
