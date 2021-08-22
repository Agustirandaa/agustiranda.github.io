$(document).ready(function(){
    $('.page-scroll').on('click', function(e){
    // get tag href
        const href = $(this).attr('href');
    // get tag element yang bersangkutan
        const element = $(href);
       
        $('html, body').animate({
            scrollTop: element.offset().top - 80
        }, 100);

        e.preventDefault();
    });
});


// Tangkap data contact kirem ke sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4Mz6tWjG-p5agsVdc0oFrMd_DO4J2mGklnSx96fD0wZokrM0uEC_lWCTSYvHmeiQ/exec'
const form = document.forms['submit-to-google-sheet']

// alert and loading
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

  form.addEventListener('submit', e => {
    e.preventDefault()

    // Ketika tombol di click
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');

        // reset form
        form.reset();
          console.log('Success!', response)
        })
      .catch(error => {
          console.error('Error!', error.message)
    })
  })