uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;

varying float vTime;
varying float vScale;
varying float vPixelRatio;

attribute float aScale;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.05;
  modelPosition.x += sin(uTime + modelPosition.x * 100.0) * aScale * 0.06;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  gl_PointSize = uSize * aScale * uPixelRatio;
  gl_PointSize *= (1.0 / - viewPosition.z);

  vTime = uTime;
  vScale = aScale;
  vPixelRatio = uPixelRatio;
}