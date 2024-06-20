let lat;
let lng;
let placeName;
const nameErr = document.getElementById("name-error");
const locationErr = document.getElementById("location-error");
const priceErr = document.getElementById("price-error");
const descErr = document.getElementById("desc-error");
const startErr = document.getElementById("start-error");
const endErr = document.getElementById("end-error");

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
    console.log(lat, lng, placeName);
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

  const pname = myform.pname.value;
  const pprice = myform.pprice.value;
  const pdesc = myform.pdesc.value;
  const pstartDate = myform.pstartDate.value;
  const pendDate = myform.pendDate.value;
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
      }),
    });

    const data = await res.json();

    if (data.errors) {
      console.log(data.errors);
      const errorsMessages = { };
Object.values(data.errors).forEach(({properties}) => {
 
    errorsMessages[properties.path ] = properties.message;
console.log(properties.path , properties.message);

})
//print errors in the html
console.log(errorsMessages);



    } else {
      location.assign("/admin/blank");
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong , please try again");
  }
});
