const gallery = document.querySelectorAll('.gallery .image');
const lightBox = document.querySelector('.light-box');
const previewImg = lightBox.querySelector('img');
const closeIcon = lightBox.querySelector('.close-icon');
const leftBtn = document.querySelector('.on-left');
const rightBtn = document.querySelector('.on-right');
const shadow = document.querySelector('.shadow');

window.onload = ()=>{
    for(let i=0; i<gallery.length; i++){
        let newIndex = i;
        let clickImgIndex;

        // image slider onclick function
        gallery[i].onclick = ()=>{
            
            clickImgIndex = newIndex;
            // image click preview
            function preview(){
                let selectedImgUrl = gallery[newIndex].querySelector('img').src;
                previewImg.src = selectedImgUrl;
                console.log(selectedImgUrl);
            }

            if(newIndex == 0){
                leftBtn.style.display = 'none';

            }
            if(newIndex >= gallery.length - 1){
                rightBtn.style.display = 'none';

            }



            // left and right slide button
            // left click
            leftBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    leftBtn.style.display = 'none';
                }else{
                    preview();
                    rightBtn.style.display = 'block';
                }
            }

            // right click
            rightBtn.onclick =()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    rightBtn.style.display = 'none';
                }else{
                    preview();
                    leftBtn.style.display = 'block';
                }
            }

            
            preview();
            
            lightBox.classList.add("show");
            shadow.style.display = 'block';


            // close button function
            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                leftBtn.style.display = 'block';
                rightBtn.style.display = 'block';
                lightBox.classList.remove("show");
                shadow.style.display = 'none';
            }
        }
    }
}