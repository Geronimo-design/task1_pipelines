/** @format */

const image1 = '<img src="images-for-L1T28/velociraptor.WEBP"/>';
const image2 = '<img src="images-for-L1T28/spinosaurus.JPEG"/>';
const image3 = '<img src="images-for-L1T28/ankylosaurus_vs_rex.jpg"/>';
const image4 = '<img src="images-for-L1T28/deinocheirus.JPEG"/>';
const image5 = '<img src="images-for-L1T28/palorchestes.JPEG"/>';
const image6 = '<img src="images-for-L1T28/thylacoleo.JPEG"/>';

const arrayOfImages = [image1, image2, image3, image4, image5, image6];

article1 = `<table id="palaeontology_info">
<tr>
  <th><u>Benefits palaeontology brings to the table</u></th>
  <td>
    <ul>
      <li>
        Understanding of the effects of climate change to apply this
        knowledge to the future
      </li>
      <li>
        As a result, we are able to refine things such as agriculture
        to optimise on climactic changes
      </li>
    </ul>
  </td>
</tr>
<tr>
  <th><u>Places where it can be studied</u></th>
  <td>
    <ul>
      <li>
        <a
          href="https://www.wits.ac.za/course-finder/postgraduate/science/palaeontology/"
          >University of the Witwatersrand</a
        >
      </li>
      <li>
        <a
          href="https://www.earth.ox.ac.uk/research/themes/palaeobiology-and-evolution/"
          >University of Oxford</a
        >
      </li>
      <li>
        <a href="https://www.usu.edu/geo/">Utah State University</a>
      </li>
    </ul>
  </td>
</tr>
</table>`;

placeToSaveImages = document.getElementById('saved_images');
placeToSaveArticles = document.getElementById('saved_articles');

const saver = (index) => {
  if (arrayOfImages.includes(arrayOfImages[index])) {
    placeToSaveImages.innerHTML = arrayOfImages[index];
  }
};
