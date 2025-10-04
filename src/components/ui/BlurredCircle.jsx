const BlurredCircle = ({
  size = 300,
  color = "bg-blue-400",
  blur = "blur-3xl",
  opacity = "opacity-40",
  className = "",
  style = {},
}) => (
  <div
    className={`
      pointer-events-none
      absolute
      ${color}
      rounded-full
      ${blur}
      ${opacity}
      ${className}
    `}
    style={{
      width: size,
      height: size,
      ...style,
    }}
  />
);

export default BlurredCircle;
