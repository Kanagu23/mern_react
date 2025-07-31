function EventPropagation() {
  function parentHandler() {
    console.log("Parent clicked");
  }

  function childHandler(e) {
     e.stopPropagation();
    console.log("Child clicked");
  }

  return (
    <div onClick={parentHandler} style={{ background: "#ddd", padding: "20px" }}>
      <button onClick={childHandler}>Click Me</button>
    </div>
  );
}
export default EventPropagation
