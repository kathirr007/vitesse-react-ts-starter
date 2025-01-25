export default function ErrorLayout(props) {
  // useNProgress();
  return (
    <div className="flex items-center justify-center h-screen">
      {props.children}
    </div>
  );
}
