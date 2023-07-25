import {
  BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer,
} from 'three';

import Application from './application';

export default class Game {
  public scene: Scene;

  public camera: PerspectiveCamera;

  public renderer: WebGLRenderer;

  private cube: Mesh | null = null;

  constructor(app: Application) {
    this.scene = app.scene as Scene;
    this.camera = app.camera as PerspectiveCamera;
    this.renderer = app.renderer as WebGLRenderer;

    this.init();
    this.animate();
  }

  private init(): void {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xff00aa });

    this.cube = new Mesh(geometry, material);

    this.scene.add(this.cube);

    this.cube.position.z = -5;
    this.cube.rotation.x = 10;
    this.cube.rotation.y = 5;

    this.renderer.render(this.scene, this.camera);
  }

  private animate(): void {
    if (!this.cube) {
      return;
    }

    this.cube.rotation.x += 0.01;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame((): void => {
      this.animate();
    });
  }
}
