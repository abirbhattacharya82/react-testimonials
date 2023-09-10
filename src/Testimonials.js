import React from "react";
import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';

function Testimonials(props) {
    document.documentElement.style.setProperty("--items", props.items.length);
    return (
        <div className="Testimonials">
            <div className="Track">
                {props.items.map((item, index) => (
                    <Testimonial key={index} image={item[0]} alt={`img${index + 1}`} name={item[1]} designation={item[2]} review={item[3]} />
                ))}
            </div>
        </div>
    )
};
export default Testimonials;