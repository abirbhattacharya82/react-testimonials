# React Testimonials
Create beautiful, infinitely looping testimonial carousels with ease using the React Testimonials package. This customizable component allows you to showcase customer reviews, quotes, or any other content in an engaging and dynamic way.

## Key Features
🎨 Customizable Design
<br>
🔄 Responsive Layout
<br>
📸 Image Support
<br>
⚙️ Easy Integration

## Installation
```
npm i react-testimonials
```

## Usage
```
import React from 'react';
import Testimonials from 'react-testimonials';
function App() {
  
  const img1 = ''; // Put the Image URLs
  const img2 = ''; // Put the Image URLs
  const img3 = ''; // Put the Image URLs
  const img4 = ''; // Put the Image URLs
  const img5 = ''; // Put the Image URLs
  const img6 = ''; // Put the Image URLs

  const review1=[img1, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review2=[img2, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review3=[img3, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review4=[img4, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review5=[img5, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  const review6=[img6, "Put The Names here", "Put the Designations here", "Put the reviews here"];
  
  const items=[review1,review2,review3,review4,review5,review6];

  return (
    <div className="App">
      <Testimonials items={items} />
    </div>
  );
}

export default App;
```

## Custom Styling
You can style the carousel to match your project's design by targeting the CSS classes applied to the carousel and its elements. You can create a stylesheet and define styles for this class to make the necessary adjustments.

- To change the background color of the written part which is by default Bluish Purple use
    ```
        .Testimonial .DetailSection{
            background-color: *desired color*
        }
    ```
- To change color of names, designations and reviews use
    ```
        .Testimonial .DetailSection .Name{
            color: *desired color*
        }
        .Testimonial .DetailSection .Designation{
        color: *desired color*
        }
        .Testimonial .DetailSection .Review{
        color: *desired color*
        }
    ```
- To Alter the Width of the frame use
    ```
        .Testimonials{
            width: *desired width*
        }
    ```

## License
This package is open-source and available under the MIT License.

## Issues and Contributions
If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. <br>

#### Thank you for using the React Testimonials package! We hope it helps you create engaging and dynamic testimonial carousels for your projects.