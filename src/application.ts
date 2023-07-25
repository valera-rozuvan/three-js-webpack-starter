import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const windowInnerHeightCorrection = 4;

export default class Application {
  public scene: Scene | null = null;

  public camera: PerspectiveCamera | null = null;

  public renderer: WebGLRenderer | null = null;

  constructor(onReadyCallback: (app: Application) => void) {
    this.domReady((): void => {
      this.init();
      this.handleWindowResize();

      onReadyCallback(this);
    });
  }

  private domReady(f: () => void): void {
    if (/in/.test(document.readyState)) {
      setTimeout((): void => { this.domReady(f); }, 9);
      return;
    }

    f();
  }

  private init(): void {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(25, window.innerWidth / (window.innerHeight - windowInnerHeightCorrection));
    this.renderer = new WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight - windowInnerHeightCorrection);
    this.renderer.domElement.id = 'three-js-renderer';

    const rootEl = document.getElementById('root');
    if (!rootEl) {
      throw new Error('DOM element with id "root" not found!');
    }
    rootEl.appendChild(this.renderer.domElement);
  }

  private handleWindowResize(): void {
    window.addEventListener('resize', (): void => {
      if (!this.camera || !this.renderer) {
        return;
      }

      this.camera.aspect = window.innerWidth / (window.innerHeight - windowInnerHeightCorrection);
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight - windowInnerHeightCorrection);
    }, false);
  }
}
