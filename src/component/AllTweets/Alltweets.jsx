import React, { useEffect, useState } from 'react';
import './AllTweets.css';
import { getDatabase, ref, set, child, remove, update, onValue, get } from 'firebase/database'
import { user } from '../../firebaseconfig';
import TransitionsModal from '../model/model'


function Alltweets() {

  // 
  const [ans, setAns] = useState([]);
  const [like, setLike] = useState(false);
  const [currentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    user(setAns);
  }, [like]);




  const db = getDatabase();


  return (
    <div id='AllTweetsMain'>
      <TransitionsModal open={open} setOpen={setOpen} userId={id} ></TransitionsModal>
      {ans.map((it, idx) => {
        //  console.log(currentUser.username);
        const commnts = it.cmnt;
        return (
          <div className='Alltweet' id={it.id} data-bs-spy="scroll">
            <img className="profil" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            <span className='AlltweetName'>{it.userName}</span>
            <p className='AlltweetP'>{it.mess}</p>
            <div id='Alltweetlogo'>
              <button onClick={() => {
                setOpen(true);
                setId(it.id)
              }}><i className="fa-sharp fa-regular fa-message"></i></button>


              <button>
                <i className="fa-solid fa-retweet"></i>
              </button>

              <button onClick={(e) => {
                setColor(!color);
                let arr = it.isLike;
                // console.log(currentUser.username);
                // console.log(e.target.parentElement.parentElement.id)
                setLike(!like);
                if (!arr) {
                  let cnt = it.likes
                  arr = [currentUser.username];
                  update(ref(db, "user/" + it.id), {
                    likes: cnt + 1,
                    isLike: arr,
                  })

                } else {
                  // console.log(it.id);
                  if (!arr.includes(currentUser.username)) {
                    let cnt = it.likes
                    // console.log(currentUser.username);
                    arr.push(currentUser.username);
                    update(ref(db, "user/" + it.id), {
                      likes: cnt + 1,
                      isLike: arr,
                    })
                    console.log("not selected2");
                  } else {
                    console.log("not selected1");

                  }
                }

              }}><i className="fa-regular fa-heart" id={color && "likeColor"}></i> {it.likes} </button>
              <button><i className="fa-solid fa-share"></i> </button>


            </div >
            {commnts && <div className='commentDetail'>{
              commnts.map((element) => {
                return <>

                  <div className='commentMessage'>
                    <span className='commentedBy'>Reply by {element.name}</span>
                    <p className='commentedMessage'>{element.message}</p>
                  </div>

                </>
              })
            }
            </div>
            }
          </div>


        )

      })
      }
    </div>
  )
}
export default Alltweets;
