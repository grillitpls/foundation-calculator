  const screen = document.querySelector('.screen')
  const btn0 = document.querySelector('[class="btn 0"]')
  const btn1 = document.querySelector('[class="btn 1"]')
  const btn2 = document.querySelector('[class="btn 2"]')
  const btn3 = document.querySelector('[class="btn 3"]')
  const btn4 = document.querySelector('[class="btn 4"]')
  const btn5 = document.querySelector('[class="btn 5"]')
  const btn6 = document.querySelector('[class="btn 6"]')
  const btn7 = document.querySelector('[class="btn 7"]')
  const btn8 = document.querySelector('[class="btn 8"]')
  const btn9 = document.querySelector('[class="btn 9"]')
  const btnNegPos = document.querySelector('[class="btn negpos"]')
  const btnPercent = document.querySelector('[class="btn percent"]')
  const btnDecSep = document.querySelector('[class="btn ."]')
  const btnBckSp = document.querySelector('[class="btn bcksp"]')
  const btnPlus = document.querySelector('[class="btn + op"]')
  const btnMinus = document.querySelector('[class="btn - op"]')
  const btnMultiply = document.querySelector('[class="btn x op"]')
  const btnDivide = document.querySelector('[class="btn / op"]')
  const btnEqual = document.querySelector('[class="btn = op"]')
  const btnClear = document.querySelector('[class="btn clear"]')

  // screen
  screen.innerHTML = '0'
  // Base vars
  let a = 0
  let b = NaN
  let result = 0
  let op = ''
  // switch for a and b
  let isA = true

  // Based math func
  function add(first, second) {
    return Math.round((first + second) * 10) / 10
  }

  function substract(first, second) {
    return Math.round((first - second) * 10) / 10
  }

  function multiply(first, second) {
    return Math.round((first * second) * 10) / 10
  }

  function divide(first, second) {
    return Math.round((first / second) * 10) / 10
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === '0') {
      btn0.click()
      console.log(0)
    }else if (e.key === '1') {
      btn1.click()
    }else if (e.key === '2') {
      btn2.click()
    }else if (e.key === '3') {
      btn3.click()
    }else if (e.key === '4') {
      btn4.click()
    }else if (e.key === '5') {
      btn5.click()
    }else if (e.key === '6') {
      btn6.click()
    }else if (e.key === '7') {
      btn7.click()
    }else if (e.key === '8') {
      btn8.click()
    }else if (e.key === '9') {
      btn9.click()
    }else if (e.key === '.') {
      btnDecSep.click()
    }else if (e.key === 'Backspace') {
      btnBckSp.click()
    }else if (e.key === '+') {
      btnPlus.click()
    }else if (e.key === '-') {
      btnMinus.click()
    }else if (e.key === '*') {
      btnMultiply.click()
    }else if (e.key === '/') {
      btnDivide.click()
    }else if (e.key === '=') {
      btnEqual.click()
    }else if (e.key === 'Escape') {
      btnClear.click()
    }
  })

  // Print button on screen
    // Number button
  btn0.addEventListener("click", () => {
    // if only 0 on screen, then no 0 will be appending
    if (screen.innerHTML === '0' && screen.innerHTML !== '0.') {
      // keep the same
      screen.innerHTML = '0'
    }
    
    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn0.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }

      // print number for b to screen
      screen.innerHTML += btn0.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 
    && isA === true
    && screen.innerHTML !== '0') {
      // print number for a to screen
      console.log(btn0.textContent)
      screen.innerHTML += btn0.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn1.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 
    
    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn1.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }

        // print number for b to screen
        screen.innerHTML += btn1.textContent
  
        // assign b
        b = Number(screen.innerHTML)
        console.log('b now', b)
        
        isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // reset result (already assign it to a somewhere)
      result = 0
      
      // print new number on screen
      screen.innerHTML += btn1.textContent
      
      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)
      
      isA = true
    }
  })
      
  btn2.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
      if (screen.innerHTML === '0') {
        screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn2.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
      
      // print number for b to screen
      screen.innerHTML += btn2.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn2.textContent)
      screen.innerHTML += btn2.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn3.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn3.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }

      // print number for b to screen
      screen.innerHTML += btn3.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn3.textContent)
      screen.innerHTML += btn3.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn4.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn4.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
    
      // print number for b to screen
      screen.innerHTML += btn4.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn4.textContent)
      screen.innerHTML += btn4.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn5.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn5.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
      
      // print number for b to screen
      screen.innerHTML += btn5.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn5.textContent)
      screen.innerHTML += btn5.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn6.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn6.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }

      // print number for b to screen
      screen.innerHTML += btn6.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
        // print number for a to screen
        console.log(btn6.textContent)
        screen.innerHTML += btn6.textContent
        
        a = Number(screen.innerHTML)
        console.log('a now', a)
  
        isA = true
    }
  })

  btn7.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn7.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
      
      // print number for b to screen
      screen.innerHTML += btn7.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn7.textContent)
      screen.innerHTML += btn7.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

  btn8.addEventListener("click", () => {
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''
      
      // print new number on screen
      screen.innerHTML += btn8.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
  
      // print number for b to screen
      screen.innerHTML += btn8.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn8.textContent)
      screen.innerHTML += btn8.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)
      
      isA = true
    }
  })

  btn9.addEventListener("click", () => {    
    // if screen is by default, and btn pressed is not 0, 
      // then wipe 0 and make first digit
    if (screen.innerHTML === '0') {
      screen.innerHTML = ''
    } 

    if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // wipe result from screen
      screen.innerHTML = ''

      // print new number on screen
      screen.innerHTML += btn9.textContent

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }else if (b.toString().replace('-', '').length < 9 && isA === false) {
      // if b = 0 (and screen dont have '0.', for case cal with 0.) then wipe screen for new b (case for continue pressing op to new cal)
      if (isNaN(b) === true && screen.innerHTML !== '0.') {
        screen.innerHTML = ''
      }
      
      // print number for b to screen
      screen.innerHTML += btn9.textContent

      // assign b
      b = Number(screen.innerHTML)
      console.log('b now', b)
      
      isA = false
    }else if (a.toString().replace('-', '').length < 9 && isA === true) {
      // print number for a to screen
      console.log(btn9.textContent)
      screen.innerHTML += btn9.textContent
      
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

    // negPos btn
  btnNegPos.addEventListener("click", () => {
    if (screen.innerHTML === 'Nono!') {
      screen.innerHTML = "Nono!"
    }
    if (screen.innerHTML.includes('-') === false && screen.innerHTML !== '0') {
      screen.innerHTML = "-" + screen.innerHTML
    }else if (screen.innerHTML.includes('-') === true) {
      screen.innerHTML = screen.innerHTML.slice(1)
    }

    if (isA === false) {
      b = Number(screen.innerHTML)
      console.log('b now', b)

      // might be unnecessary
      isA = false
    } else if (isA === true) {
      a = Number(screen.innerHTML)
      console.log('a now', a)

      // might be unnecessary
      isA = true
    }
  })

    // percent btn
      // having percent at the end shouldnt be able to have more percent
      //  we have choice that make the percent btn the casio style or the phone style
  btnPercent.addEventListener("click", () => {
    if (isA === true) {
      a = Number(screen.innerHTML) / 100
      console.log('a now', a)
      screen.innerHTML = a 

      isA = true
    } else if (isA === false) {
      b = Number(screen.innerHTML) / 100
      console.log('b now', b)
      screen.innerHTML = b
      
      isA = false
    }

    if (screen.innerHTML.length > 9 && screen.innerHTML !== 'Nono!') {
      screen.innerHTML = Number(screen.innerHTML).toExponential(0)
    }
  })
    
      // decimal seperator btn
  btnDecSep.addEventListener("click", () => {
    // if operator was pressed then this click is b, else its a
    if (b.toString().replace('-', '').length < 9 
    && screen.innerHTML.includes('.') === false 
    && isA === false) {
      // DecSep right away when assigning b
      if (isNaN(b) === true) {
        // print to screen
        screen.innerHTML = '0.'

        // assign b
        b = Number(screen.innerHTML)
        console.log('b now', b)

        isA = false
      }else if (b.toString().replace('-', '').length < 9) {
        // print DecSep for b to screen
        screen.innerHTML += btnDecSep.textContent
  
        // assign b
        b = Number(screen.innerHTML)
        console.log('b now', b)
      }
    }
    // DecSep right away and assigning a
    else if (screen.innerHTML === '0') {
      // print to screen 0.
      screen.innerHTML = '0.'

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
    // case that already have result 
    else if (screen.innerHTML === 'Nono!') {
      // reset result (already assign it to a somewhere)
      result = 0

      // screen go to default
      screen.innerHTML = '0'

      // print '.'
      screen.innerHTML += '.'

      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
    // case that starting fresh
    else if (screen.innerHTML.includes('.') === false 
      && a.toString().replace('-', '').length < 9) {
      // print DecSep for a to screen
      console.log(btnDecSep.textContent)
      screen.innerHTML += btnDecSep.textContent
      
      // assign a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })

    // backspace btn
  btnBckSp.addEventListener("click", () => {
    // if screen already blank then do nothing, and else
    if (screen.innerHTML === '0') {
      screen.innerHTML = '0'
      console.log('a and b now', a, b)
    }else if (screen.innerHTML.includes('e') === true ) {
      screen.innerHTML = '0'
    }else if (screen.innerHTML.length === 1 
      || (screen.innerHTML.length === 2 
        && screen.innerHTML.includes('-') === true)) {
      screen.innerHTML = '0'
    }else {
      // delete last element on screen
      screen.innerHTML = screen.innerHTML.slice(0, -1)
    }

    // (this case user press equal, make all op disapear then can keep a (Casio)) 
    if (result !== 0 && isA === true
      && btnPlus.style.backgroundColor !== 'orange'
      && btnMinus.style.backgroundColor !== 'orange'
      && btnMultiply.style.backgroundColor !== 'orange'
      && btnDivide.style.backgroundColor !== 'orange'
    ) {
      console.log('result now', result)

      // assign what is on screen to a
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    } 
    // this case also need fixing when 0 !== default
    else if (result !== 0 && isA === false
      && (btnPlus.style.backgroundColor === 'orange'
      || btnMinus.style.backgroundColor === 'orange'
      || btnMultiply.style.backgroundColor === 'orange'
      || btnDivide.style.backgroundColor === 'orange')) {
      b = Number(screen.innerHTML)
      console.log('b now', b)
      
      isA = false
    }
    // a!==0 is the lazy of a is already assign
    else if ((btnPlus.style.backgroundColor === 'orange'
      || btnMinus.style.backgroundColor === 'orange'
      || btnMultiply.style.backgroundColor === 'orange'
      || btnDivide.style.backgroundColor === 'orange')
      && isA === false) {

      // assign result to b
      b = Number(screen.innerHTML)
      console.log('b now', b)

      isA = false
    }else {
      a = Number(screen.innerHTML)
      console.log('a now', a)

      isA = true
    }
  })  

    // numb button func, op button func

    // Op button
  btnPlus.addEventListener("click", () => {
    // toggle switch, appearing of this can make other place's switch can be delete
    isA === true ? isA = false : isA = true

    // click this op button with isNaN(b) === false in the middle meaning make the calculator with the previous op
    if (btnMinus.style.backgroundColor === 'orange' && b !== NaN) {
      // assign old op
      op = ''
      op = '-'

      // unclick old op
      btnMinus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnPlus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '+'
    }else if (btnMultiply.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '*'

      // unclick old op
      btnMultiply.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnPlus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '+'
    }
    // (user try to divide by 0)
    else if (btnDivide.style.backgroundColor === 'orange' && b === 0) {
      // unclick old op and reset op
      btnDivide.style.backgroundColor = ''
      op = ''

      // snarky error
      console.log('a and b now', a, b)
      screen.innerHTML = 'Nono!'

      b = NaN
      isA = true
    }else if (btnDivide.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '/'

      // unclick old op
      btnDivide.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnPlus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '+'
    }else if (btnPlus.style.backgroundColor === "orange" && isNaN(b) === false) {
      btnPlus.style.backgroundColor = 'orange'
      console.log('keep orange')
      
      //  reset op and assign new op **
      op = ''
      op = '+'

      // clear screen
      screen.innerHTML = ''

      // run cal to get result, and print to screen, assign result to a (ready for next cal)
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }
      
      // reset already done with b
      b = NaN
    }else if (btnPlus.style.backgroundColor === "") {
      // unclick other op button
      btnMinus.style.backgroundColor = ''
      btnMultiply.style.backgroundColor = ''
      btnDivide.style.backgroundColor = ''

      // activate this op 
      btnPlus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = ''
      op = '+'

      isA = false
    }
  })

  btnMinus.addEventListener("click", () => {
    // toggle switch, appearing of this can make other place's switch can be delete
    isA === true ? isA = false : isA = true

    // click this op button with isNaN(b) === false in the middle meaning make the calculator with the previous op
    if (btnPlus.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '+'

      // unclick old op
      btnPlus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMinus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '-'
    }else if (btnMultiply.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '*'

      // unclick old op
      btnMultiply.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMinus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '-'
    }
    // (user try to divide by 0)
    else if (btnDivide.style.backgroundColor === 'orange' && b === 0) {
      // assign old op
      op = ''
      op = '/'

      // unclick old op and reset op
      btnDivide.style.backgroundColor = ''
      op = ''

      // snarky error
      console.log('a and b now', a, b)
      screen.innerHTML = 'Nono!'

      b = NaN
      isA = true
    }else if (btnDivide.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '/'

      // unclick old op
      btnDivide.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMinus.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '-'
    }else if (btnMinus.style.backgroundColor === "orange" && isNaN(b) === false) {
        btnMinus.style.backgroundColor = 'orange'
        console.log('keep orange')
        
        // reset op and assign new op
        op = '-'

        // clear screen
        screen.innerHTML = ''

        // run cal to get result, and print to screen, assign result to a (ready for next cal)
        result = operator(op)
        a = result
        console.log('a now', a)

        isA = false

        if (result.toString().length > 11) {
          screen.innerHTML = result.toExponential(0)
        }else {
          screen.innerHTML = result
        }
        
        // reset already done with b
        b = NaN
    }else if (btnMinus.style.backgroundColor === "") {
        // unclick other op button
        btnPlus.style.backgroundColor = ''
        btnMultiply.style.backgroundColor = ''
        btnDivide.style.backgroundColor = ''

        // activate this op
        btnMinus.style.backgroundColor = 'orange'
        console.log('switch to orange')
        op = ''
        op = '-'
        
        isA = false
    }
  })

  btnMultiply.addEventListener("click", () => {
    // toggle switch, appearing of this can make other place's switch can be delete
    isA === true ? isA = false : isA = true

    // click this op button with isNaN(b) === false in the middle meaning make the calculator with the previous op
    if (btnPlus.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '+'

      // unclick old op
      btnPlus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMultiply.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '*'
    }else if (btnMinus.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '-'

      // unclick old op
      btnMinus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMultiply.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '*'
    }
    // (user try to divide by 0)
    else if (btnDivide.style.backgroundColor === 'orange' && isA === false) {
      // assign old op
      op = '/'

      // unclick old op and reset op
      btnDivide.style.backgroundColor = ''
      op = ''

      // snarky error
      console.log('a and b now', a, b)
      screen.innerHTML = 'Nono!'

      b = NaN
      isA = true
    } else if (btnDivide.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '/'

      // unclick old op
      btnDivide.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnMultiply.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '*'
    }else if (btnMultiply.style.backgroundColor === "orange" && isNaN(b) === false) {
      btnMultiply.style.backgroundColor = 'orange'
      console.log('keep orange')
      
      //  reset op and assign new op
      op = '*'

      // clear screen
      screen.innerHTML = ''

      // run cal to get result, and print to screen, assign result to a (ready for next cal)
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }
      
      // reset already done with b
      b = NaN
    }else if (btnMultiply.style.backgroundColor === "") {
      // unclick other op button
      btnPlus.style.backgroundColor = ''
      btnMinus.style.backgroundColor = ''
      btnDivide.style.backgroundColor = ''

      // activate this op
      btnMultiply.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '*'

      isA = false
    }
  })

  btnDivide.addEventListener("click", () => {
    // toggle switch, appearing of this can make other place's switch can be delete
    isA === true ? isA = false : isA = true

    // (user try to divide by 0 and else)
    if (b === 0) {
      // snarky error
      console.log('a and b now', a, b)
      screen.innerHTML = 'Nono!'

      // reset op
      btnDivide.style.backgroundColor = ''
      op = ''

      b = NaN
      isA = true
    }
    // click this op button with isNaN(b) === false in the middle meaning make the calculator with the previous op
    else if (btnPlus.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '+'

      // unclick old op
      btnPlus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN

      // activate this op
      btnDivide.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '/'
    }else if (btnMultiply.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '*'

      // unclick old op
      btnMultiply.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN
      
      // activate this op
      btnDivide.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '/'
    }else if (btnMinus.style.backgroundColor === 'orange' && isNaN(b) === false) {
      // assign old op
      op = ''
      op = '-'

      // unclick old op
      btnMinus.style.backgroundColor = ''

      // get result, print to screen, assign it to a
      result = operator(op)
      a = result
      console.log('a now', a)

      isA = false

      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }

      // reset b and old op since done with it
      b = NaN
      
      // activate this op
      btnDivide.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '/'
    }else if (btnDivide.style.backgroundColor === "orange" && isNaN(b) === false) {
      btnDivide.style.backgroundColor = 'orange'
      console.log('keep orange')
      
      //  reset op and assign new op
      op = '/'

      // clear screen
      screen.innerHTML = ''

      // run cal to get result, and print to screen, assign result to a (ready for next cal)
      result = operator(op)
      a = result
      console.log('a now', a)

      
      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }
      
      // reset already done with b
      b = NaN

      isA = false
    }else if (btnDivide.style.backgroundColor === '') {
      btnMinus.style.backgroundColor = ''
      btnMultiply.style.backgroundColor = ''
      btnPlus.style.backgroundColor = ''

      // activate this op
      btnDivide.style.backgroundColor = 'orange'
      console.log('switch to orange')
      op = '/'
      
      isA = false
    }   
  })

  btnEqual.addEventListener("click", () => {
    // toggle switch, appearing of this can make other place's switch can be delete
    isA === true ? isA = false : isA = true

    // user try to divide by 0
    if (b === 0) {
      // reset op btns
      btnPlus.style.backgroundColor = ""
      btnMinus.style.backgroundColor = ""
      btnMultiply.style.backgroundColor = ""
      btnDivide.style.backgroundColor = ""
      op = ''

      // snarky error
      console.log('a and b now', a, b)
      screen.innerHTML = 'Nono!'
      console.log('Nono!')

      b = NaN

      isA = true
    }
    // case b === NaN
    else if (isNaN(b) === true) {
      // reset op btns, print result to screen, and assign a t0 result
      console.log(btnEqual.textContent)
      btnPlus.style.backgroundColor = ""
      btnMinus.style.backgroundColor = ""
      btnMultiply.style.backgroundColor = ""
      btnDivide.style.backgroundColor = ""
      op = ''
      result = a
      console.log('result', result)
      
      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }
      
      isA = true
    }
    // if a or b un-assgined (user press op continuingly through many cal, then decide to press equal)
    else if (isNaN(b) === false) {
      // get result and assign to a
      console.log('a and b now',a, b, op)
      result = operator(op)
      console.log('result', result)
      a = result
      console.log('a now', a)

      
      // keep result on screen
      if (result.toString().length > 11) {
        screen.innerHTML = result.toExponential(0)
      }else {
        screen.innerHTML = result
      }
      
      // reset b and un-click op buttons
      console.log(btnEqual.textContent)
      btnPlus.style.backgroundColor = ""
      btnMinus.style.backgroundColor = ""
      btnMultiply.style.backgroundColor = ""
      btnDivide.style.backgroundColor = ""
      op = ''
      b = NaN

      isA = true
    }
  })

  btnClear.addEventListener("click", () => {
    console.log(btnClear.textContent)
    btnPlus.style.backgroundColor = ""
    btnMinus.style.backgroundColor = ""
    btnMultiply.style.backgroundColor = ""
    btnDivide.style.backgroundColor = ""
    a = 0
    b = NaN
    result = 0
    op = ''
    screen.innerHTML = '0'
    isA = true
  })

// Operator func
  function operator(op) {
    if (op === '+') {
        return add(a, b)
    } else if (op === '-'){
        return substract(a, b)
    } else if (op === '*'){
        return multiply(a, b)
    } else if (op === '/'){
        return divide(a, b)
    }
  }

  


