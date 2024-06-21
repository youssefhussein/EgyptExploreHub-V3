let lat;
let lng;
let placeName;
const nameErr = document.getElementById("name_error");
const locationErr = document.getElementById("location_error");
const priceErr = document.getElementById("price_error");
const descErr = document.getElementById("description_error");
const startErr = document.getElementById("startAt_error");
const endErr = document.getElementById("endAt_error");
const capErr = document.getElementById("capacity_error");

function initAutocomplete() {
  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("location"),
    {
      //options

      componentRestrictions: { country: ["EG"] },
      fields: ["geometry", "name"],
    }
  );

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      document.getElementById("location").placeholder = "Enter a location";
      return;
    }
    lat = place.geometry.location.lat();
    lng = place.geometry.location.lng();
    placeName = place.name;
    
  });
}

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if(event.keyCode === 13) {return false;} // prevent enter from submitting
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const myform = document.getElementById("addpk");
myform.addEventListener("submit", async (e) => {
  e.preventDefault(); // no refresh
if(e.keyCode === 13) {return false;} // prevent enter from submitting
  const pname = myform.pname.value;
  const pprice = myform.pprice.value;
  const pdesc = myform.pdesc.value;
  const pstartDate = myform.pstartDate.value;
  const pendDate = myform.pendDate.value;
  const capacity = myform.capcity.value;
  try {
    const res = await fetch("/admin/addpkg_post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pname,
        lat,
        lng,
        placeName,
        pprice,
        pdesc,
        pstartDate,
        pendDate,
        capacity,
      }),
    });

    const data = await res.json();

    if (data.errors) {
     
      const errorsMessages = { };
Object.values(data.errors).forEach(({properties}) => {
 
    errorsMessages[properties.path ] = properties.message;


})
//print errors in the html
myform.reset();

const newKeys = {
  name: 'name_error',
  lat: 'lat',
  lng: 'lng',
  location: 'location_error',
  price: 'price_error',
  description: 'description_error',
  startAt: 'startAt_error',
  endAt: 'endAt_error',
  capacity: 'capacity_error',
};

const renamedObject = renameKeys(errorsMessages, newKeys);
//reset the form







nameErr.innerHTML = renamedObject.name_error;
locationErr.innerHTML = renamedObject.location_error;
priceErr.innerHTML = renamedObject.price_error;
descErr.innerHTML = renamedObject.description_error;
startErr.innerHTML = renamedObject.startAt_error;
endErr.innerHTML = renamedObject.endAt_error;
capErr.innerHTML = renamedObject.capacity_error;






    } else {
      location.assign("/admin/blank");
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong , please try again");
  }
});



//rename keys to the correct ids in the form
function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

