import { useState } from "react"

export const DragNDrop=()=>{
const [dropped,setDropped]=useState(false)
const handleDragStart=(e)=>{
    e.dataTransfer.setData("drag-box","testing")
    // console.log(e)
}
const handleDrop=(e)=>{
    e.preventDefault()
    const dropData=e.dataTransfer.getData("drag-box")
    if(dropData){
        setDropped(true)
    }
    console.log("Drop",dropData)
}
const handleDragOver=(e)=>{
    e.preventDefault()
    // console.log("DRagOver",e)
}
    return (
        <div>
            <h2>Drag 'N' Drop</h2>
            <div draggable onDragStart={handleDragStart} style={{
                height:100,
                width:100,
                background:"#eee",
                cursor:"grab"
            }}>
                DRAG BOX
            </div>
            <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={(e)=>{
                console.log("END",e)
            }} style={{
                height:100,
                width:100,
                background:"#d2d2d2",
                cursor:"grab"
            }}>
                {dropped?"ITEM DROPPED":""}
            </div>
        </div>
    )
}