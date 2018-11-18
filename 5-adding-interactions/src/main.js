const sceneElement = document.querySelector('a-scene');

sceneElement.addEventListener('loaded', function() {
  const addBox = () => {

    const newBox = document.createElement('a-box');
    sceneElement.appendChild(newBox);
    newBox.setAttribute('dynamic-body', 'shape:auto');
    newBox.setAttribute('position', {x: -1, y: 4, z: -5});
    newBox.setAttribute('rotation', {x: 0, y: 45, z: 0});
    newBox.setAttribute('color', '#4CC3D9');

    console.log(newBox);
  };

  document.getElementById('addButton').addEventListener('click', addBox, false);
});
