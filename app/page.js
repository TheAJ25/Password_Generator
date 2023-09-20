"use client"

import React, { useState, useCallback, useEffect, useRef } from 'react'

const page = () => {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  const password_ref = useRef(null)
  
  const password_gen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*(){}[]~?|\/"

    for(let i=0; i<length; i++){
      let ran = Math.floor(Math.random() * str.length + 1)  
      pass += str.charAt(ran)
    }

    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])


  const selections = useCallback(()=>{
    password_ref.current?.select();
    // password_ref.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    password_gen()
  }, [length, numberallowed, charallowed, setpassword])

  return (
    <>
    <div className='main'>
      <div className='pass'>
        Password generator
      </div>
      <div className='second'>
        <input className='passw'
        value = {password}
        type='text'
        placeholder='password'
        ref={password_ref}
        />
        <button className='butt'
          onClick={selections}
        >
          copy
        </button>
      </div>
      <div className='third'>
        <div className='d1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          onChange={(e) => {
            setlength(e.target.value)
          }}
          />
          <label className='i1'>length: {length}</label>
        </div>
        <div className='d2'>
          <input
          type='checkbox'
          defaultChecked={numberallowed}
          onChange={()=>{
            setnumberallowed((prev) => !prev)
          }}
          />
          <label className='i2'>Numbers</label>
        </div>
        <div className='d3'>
          <input
          type='checkbox'
          defaultChecked={charallowed}
          onChange={()=>{
            setcharallowed((prev) => !prev)
          }}
          />
          <label className='i3'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default page





// bnmb
// kgkhg
// hgjhgj
// gjhjg
// kjgjhg
// gghgjh
// kkjk
// hghjgjg
// hgjhgjhghjg
// jhgjhgjh
// hgjhjhv
// hgjhgj