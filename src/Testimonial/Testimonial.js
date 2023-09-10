import React from "react";
function Testimonial(props)
{
    return(
        <div className="Testimonial">
            <div className="Image">
                <img src={props.image} alt="" />
            </div>
            <div className="DetailSection">
                <div className="Name">
                    {props.name}
                </div>
                <div className="Designation">
                    {props.designation}
                </div>
                <div className="Review">
                    {props.review}
                </div>
            </div>
        </div>
    )
};
export default Testimonial;