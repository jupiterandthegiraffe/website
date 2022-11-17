varying float vTime;
varying float vScale;
varying float vPixelRatio;

void main() {
  float distanceToCenter = distance(sin((vTime * 0.2) * vScale * vPixelRatio + gl_PointCoord), vec2(0.5));
  float strength = (0.05 / distanceToCenter) - (0.05 * 2.0);
  gl_FragColor = vec4(0.4, 0.4, 0.4, strength);
}