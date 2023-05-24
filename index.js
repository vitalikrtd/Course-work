const images=["resources/img/scroll_image_1.jpg","resources/img/scroll_image_2.jpg","resources/img/scroll_image_3.jpg"];

function change_image(checked_id){
  document.getElementById('image-scroll-item').src=images[Number(checked_id)];
};

