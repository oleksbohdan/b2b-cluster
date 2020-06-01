import React from "react";

const Textdec = ({titledec, titledec1, 
                ssprops1, ssprops2, 
                ssprops3, ssprops4, 
                ssprops5, ssprops6, 
                ssprops7, ssprops8, 
                ssprops9
            }) => (
    <div>
        <div className="ssdec">{titledec}</div>
        <div className="ssdec1">{titledec1}</div>
            <div> {ssprops1}</div>
            <div> {ssprops2}</div>
            <div> {ssprops3}</div>
            <div> {ssprops4}</div>
            <div> {ssprops5}</div>
            <div> {ssprops6}</div>
            <div> {ssprops7}</div>
            <div> {ssprops8}</div>
            <div> {ssprops9}</div>
    </div>
    
)
export default Textdec;