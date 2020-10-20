let elemento = document.getElementById('canvas');
let paint = elemento.getContext('2d');
let width = document.body.clientWidth;
let height = document.body.clientHeight;

elemento.width = width;
elemento.height = height;

let position = Array(500).join(0).split('');

function initMatrix()
{
  paint.fillStyle = "rgba(0,20,1,0.5)";
  paint.fillRect(0,0,width,height);
  paint.fillStyle = "rgba(0, 255, 0, 1)"
  paint.font = "12pt arial"

  position.map(function(y, index)
  {
      let text = String.fromCharCode(1e2 + Math.random() * 30)
      let x = (index * 15) + 15
      canvas.getContext('2d').fillText(text, x, y)

      if(y > 100 + Math.random() * 1e5)
      {
          position[index] = 0
      }
      else
      {
          position[index] = y + 10
      }
  })
}

setInterval(initMatrix,50);
