import * as React from 'react';
import { connect } from 'react-redux';
import * as Selectors from '../redux/selectors';
import * as Actions from '../redux/actions';
import { IAppState } from '../redux/reducers';
import * as Regl from 'regl';

export class HelloCanvas extends React.Component<any, any>{
 componentDidMount() {
  const canvas1: HTMLCanvasElement = this.refs.canvas1 as HTMLCanvasElement;
  this.drawByCanvas(canvas1.getContext('2d'));

  const canvas2: HTMLCanvasElement = this.refs.canvas2 as HTMLCanvasElement;
  this.drawByRegl(canvas2);
 }

 drawByRegl(input: any) {
  let regObj = Regl({canvas: input});

  regObj.clear({
   color: [0,0,0,0]
  });

  const drawCmd = regObj({ 
   vert: `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0, 1);
    }
   `,

   frag: `
    void main() {
      gl_FragColor = vec4(1, 0, 0, 1);
    }
   `,

   attributes: {
    position: [[[0, -1], [-1, 0], [1, 1]]]
   },
 
   count: 3,
   primitive: 'triangles'
  });
  
  drawCmd();
 }

 drawByCanvas(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0,0,600,400);
  ctx.strokeRect(0,0,600,400);

  ctx.fillStyle = 'rgba(0,0,255,1.0)';
  ctx.fillRect(10,10,580,380);

  ctx.fillStyle = 'rgba(0,255,0,1.0)';
  ctx.fillRect(20,20,560,360);

  ctx.fillStyle = 'rgba(255,0,0,1.0)';
  ctx.fillRect(30,30,540,340);

  let _canvas2 = document.createElement('canvas');
  let canvas2 = _canvas2.getContext('2d');
  canvas2.fillStyle = 'rgba(255,255,0,1.0)';
  canvas2.fillRect(0,0,520,320);

  ctx.drawImage(_canvas2, 40,40,520,320);
 }

 render() {
  return (
   <div>
    <canvas ref='canvas1' width={600} height={400} style={{position: "absolute"}}> 
     Browser dont support!
    </canvas>
    <canvas ref='canvas2' width={600} height={400} style={{position: "absolute"}}> 
     Browser dont support!
    </canvas>
   </div>
  );
 }
}