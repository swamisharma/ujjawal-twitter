import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { update,get, ref,child} from 'firebase/database';
import {db} from '../../firebaseconfig'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({open,setOpen,userId}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const [ivalue,setIvalue] = React.useState("");


 function addComment(userId, comment) {
  // Get a reference to the user's comment array in the database
  const commentRef = ref(db, `users/${userId}/comments`);

  // Fetch the existing comments from the database
  get(commentRef).then((snapshot) => {
    const comments = snapshot.val() || [];

    // Add the new comment to the array
    comments.push(comment);

    // Update the comments in the database
    update(commentRef, comments).then(() => {
      console.log('Comment added successfully');
    }).catch((error) => {
      console.error('Error adding comment:', error);
    });
  }).catch((error) => {
    console.error('Error fetching comments:', error);
  });
}
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            {/* <span>hi...  {userId}</span> */}
            <div id="commentBox">
            <input type="text" placeholder="reply" className='inputvalue' onChange={(e)=>{
                   setIvalue(e.target.value);
            }} />

            <button disabled={ivalue===""} className='commntBtn' onClick={()=>{
                const dbref = ref(db);
                /* 
                  let arr = it.isLike;
              // console.log(currentUser.username);
              // console.log(e.target.parentElement.parentElement.id)
              setLike(!like);
              if(!arr){
              let cnt = it.likes
              arr = [currentUser.username];
              update(ref(db,"user/"+it.id),{
                likes : cnt+1,
                isLike : arr,
              })
                */
              get(child(dbref, "user/"+userId))
              .then((snapshot)=>{
                  const arr = snapshot.val().cmnt;
                  //  arr[0] = snapshot.val().cmnt;
                  // console.log(snapshot.val().mess);
                  const clint = snapshot.val().userName
                   console.log(userId);
                  if(!arr){
                    // arr[0] = ivalue;
                    // const ans = [ivalue];
                    const ans = [{message : ivalue,name : clint }];
                    console.log(ans);
                    update(ref(db, "user/"+userId),{
                        cmnt : ans,
                    })
                    .then(()=>{
                        alert("data successfully updated");
                    })
                    .catch((error)=>{
                        alert("unsuccessful, error"+error);
                  })
                  }else{
                    arr.push({message : ivalue,name : clint});
                    update(ref(db, "user/"+userId),{
                        cmnt : arr,
                    })
                    .then(()=>{
                        alert("data successfully updated");
                    }).catch((error)=>{
                        alert("unsuccessful, error"+error);
                  })
                  }
              }); 
            }
            

                // if(snapshot.exists()){
                //   //   alert("Account Already Exist");
                //   // let dbpass = decPass(snapshot.val().password,passwordValue)
                //   if(snapshot.val().password == passwordValue){
                //       console.log(snapshot.val());
                //       login(snapshot.val());
                //   }
                //   else{
                //       alert("Please Enter The Correct password"); 
                //   }
          
                // }
                // else{
                //  alert("user does not exist");
                // }
        //         }); 
        //   }
          
            }>Reply</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
/* 
import { get, ref, update } from 'firebase/database';
import { db } from './firebaseconfig';

function addComment(userId, comment) {
  // Get a reference to the user's comment array in the database
  const commentRef = ref(db, `users/${userId}/comments`);

  // Fetch the existing comments from the database
  get(commentRef).then((snapshot) => {
    const comments = snapshot.val() || [];

    // Add the new comment to the array
    comments.push(comment);

    // Update the comments in the database
    update(commentRef, comments).then(() => {
      console.log('Comment added successfully');
    }).catch((error) => {
      console.error('Error adding comment:', error);
    });
  }).catch((error) => {
    console.error('Error fetching comments:', error);
  });
}


*/