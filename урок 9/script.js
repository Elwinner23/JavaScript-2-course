(function() {
    function initBinking() {
      binking.setDefaultOptions({
        strategy: 'api',
        apiKey: 'cbc67c2bdcead308498918a694bb8d77'
      })
    }
  
    function initValidationTips() {
      tippy.setDefaultProps({
        trigger: 'manual',
        hideOnClick: false,
        theme: 'custom',
        distance: 8
      })
      cardNumberTip = tippy($cardNumberField)
      monthTip = tippy($monthField)
      yearTip = tippy($yearField)
      codeTip = tippy($codeField)
    }
  
    function initMasks() {
      cardNumberMask = IMask($cardNumberField, {
        mask: binking.defaultResult.cardNumberMask
      })
      monthMask = IMask($monthField, {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
        autofix: true
      })
      yearMask = IMask($yearField, {
        mask: '00'
      })
      codeMask = IMask($codeField, {
        mask: '0000'
      })
    }
  
    function showSavedCards() {
      if (savedCards.length) {
        var banksAliases = savedCards.map(function(card) {
          return card.bankAlias
        })
        binking.getBanks(banksAliases, function(result) {
          savedCardsBanks = result
          var savedCardsListHtml = savedCards.reduce(function(acc, card, i) {
            if (result[i]) {
              return acc += '<div class="binking__card" data-index="' + i + '">' +
                '<img class="binking__card-bank-logo" src="' + result[i].bankLogoSmallOriginalSvg + '" />' +
                '<img class="binking__card-brand-logo" src="' + binking.getBrandLogo(card.brandAlias) + '" />' +
                '<div class="binking__card-last4">...' + card.last4 + '</div>' +
                '<div class="binking__card-exp">' + card.expMonth + '/' + card.expYear + '</div>' +
                '</div>'
            }
            return acc += '<div class="binking__card" data-index="' + i + '">' +
              '<img class="binking__card-brand-logo" src="' + binking.getBrandLogo(card.brandAlias) + '" />' +
              '<div class="binking__card-last4">... ' + card.last4 + '</div>' +
              '<div class="binking__card-exp">' + card.expMonth + '/' + card.expYear + '</div>' +
              '</div>'
          }, '')
          $сardsList.innerHTML = savedCardsListHtml + $сardsList.innerHTML
        })
      }
    }
  
    function validate() {
      var validationResult = binking.validate($cardNumberField.value, $monthField.value, $yearField.value, $codeField.value)
      if (validationResult.errors.cardNumber && cardNumberTouched) {
        cardNumberTip.setContent(validationResult.errors.cardNumber.message)
        cardNumberTip.show()
      } else {
        cardNumberTip.hide()
      }
      var monthHasError = validationResult.errors.month && monthTouched
      if (monthHasError) {
        monthTip.setContent(validationResult.errors.month.message)
        monthTip.show()
      } else {
        monthTip.hide()
      }
      if (!monthHasError && validationResult.errors.year && yearTouched) {
        yearTip.setContent(validationResult.errors.year.message)
        yearTip.show()
      } else {
        yearTip.hide()
      }
      if (validationResult.errors.code && codeTouched) {
        codeTip.setContent(validationResult.errors.code.message)
        codeTip.show()
      } else {
        codeTip.hide()
      }
      return validationResult
    }
  
    function resetCards() {
      selectedCardIndex = null
      var $cards = document.querySelectorAll('.binking__card')
      $cards.forEach(function($card) {
        if ($card.classList.contains('binking__card_new')) {
          $card.classList.add('binking__selected')
        } else {
          $card.classList.remove('binking__selected')
        }
      })
    }
  
    function findAncestor(el, sel) {
      if ((el.matches || el.matchesSelector).call(el, sel)) return el
      while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
      return el
    }
  
    function resetForm() {
      resetCards()
      $error.classList.add('binking__hide')
      cardNumberTouched = false
      monthTouched = false
      yearTouched = false
      codeTouched = false
      cardNumberMask.unmaskedValue = ''
      monthMask.unmaskedValue = ''
      yearMask.unmaskedValue = ''
      codeMask.unmaskedValue = ''
      $saveCardField.checked = false
      $form.classList.remove('binking__hide')
      $success.classList.add('binking__hide')
    }
  
    function cardNumberChangeHandler() {
      binking($cardNumberField.value, function(result) {
        newCardInfo = result
        cardNumberMask.updateOptions({
          mask: result.cardNumberMask
        })
        $frontPanel.style.background = result.formBackgroundColor
        $frontPanel.style.color = result.formTextColor
        $frontFields.forEach(function(field) {
          field.style.borderColor = result.formBorderColor
        })
        $codeField.placeholder = result.codeName || ''
        if (result.formBankLogoBigSvg) {
          $bankLogo.src = result.formBankLogoBigSvg
          $bankLogo.classList.remove('binking__hide')
        } else {
          $bankLogo.classList.add('binking__hide')
        }
        if (result.formBrandLogoSvg) {
          $brandLogo.src = result.formBrandLogoSvg
          $brandLogo.classList.remove('binking__hide')
        } else {
          $brandLogo.classList.add('binking__hide')
        }
        var validationResult = validate()
        var isFulfilled = result.cardNumberNormalized.length >= result.cardNumberMinLength
        var isChanged = prevNumberValue !== $cardNumberField.value
        if (isChanged && isFulfilled) {
          if (validationResult.errors.cardNumber) {
            cardNumberTouched = true
            validate()
          } else {
            $monthField.focus()
          }
        }
        prevNumberValue = $cardNumberField.value
      })
    }
  
    function cardNumberBlurHandler() {
      cardNumberTouched = true
      validate()
    }
  
    function monthChangeHandler() {
      var validationResult = validate()
      if (prevMonthValue !== $monthField.value && $monthField.value.length >= 2) {
        if (validationResult.errors.month) {
          monthTouched = true
          validate()
        } else {
          $yearField.focus()
        }
      }
      prevMonthValue = $monthField.value
    }
  
    function monthBlurHandler() {
      if ($monthField.value.length === 1) {
        monthMask.unmaskedValue = '0' + $monthField.value
      }
      monthTouched = true
      validate()
    }
  
    function yearChangeHandler() {
      var validationResult = validate()
      if (prevYearValue !== $yearField.value && $yearField.value.length >= 2) {
        if (validationResult.errors.year) {
          yearTouched = true
          validate()
        } else {
          $codeField.focus()
        }
      }
      prevYearValue = $yearField.value
    }
  
    function yearBlurHandler() {
      yearTouched = true
      validate()
    }
  
    function codeChangeHandler() {
      validate()
    }
  
    function codeBlurHandler() {
      codeTouched = true
      validate()
    }
  
    function savedCardsListClickHandler(e) {
      e.preventDefault()
      var $card = findAncestor(e.target, '.binking__card')
      if (!$card) return
      var $cards = document.querySelectorAll('.binking__card')
      $cards.forEach(function($card) {
        $card.classList.remove('binking__selected')
      })
      var index = $card.getAttribute('data-index')
      if (selectedCardIndex !== index) {
        $error.classList.add('binking__hide')
      }
      selectedCardIndex = index
      $card.classList.add('binking__selected')
      if (selectedCardIndex === null) {
        $newCardForm.classList.remove('binking__hide')
        $cardNumberField.focus()
      } else {
        $newCardForm.classList.add('binking__hide')
        cardNumberTip.hide()
        monthTip.hide()
        yearTip.hide()
        codeTip.hide()
      }
    }
  
    function formSubmitHandler(e) {
      e.preventDefault()
      if (sending) return
      var formData
      if (selectedCardIndex !== null) {
        formData = savedCards[selectedCardIndex]
        console.log('Pay with saved credit card', formData)
      } else {
        cardNumberTouched = true
        monthTouched = true
        yearTouched = true
        codeTouched = true
        var validationResult = validate()
        if (validationResult.hasErrors) {
          $error.classList.remove('binking__hide')
          $error.innerHTML = 'Check your inputs'
          return
        }
        formData = {
          cardNumber: cardNumberMask.unmaskedValue,
          month: $monthField.value,
          year: $yearField.value,
          code: $codeField.value,
          save: $saveCardField.checked
        }
        console.log('Pay with new credit card', formData)
      }
      $error.classList.add('binking__hide')
      sending = true
      $submitButton.classList.add('binking__loading')
      $сardsList.classList.add('binking__disabled')
      $submitButton.disabled = true
      $cardNumberField.disabled = true
      $monthField.disabled = true
      $yearField.disabled = true
      $codeField.disabled = true
      $saveCardField.disabled = true
      setTimeout(function() {
        sending = false
        $сardsList.classList.remove('binking__disabled')
        $submitButton.classList.remove('binking__loading')
        $submitButton.disabled = false
        $cardNumberField.disabled = false
        $monthField.disabled = false
        $yearField.disabled = false
        $codeField.disabled = false
        $saveCardField.disabled = false
        if (selectedCardIndex === null && $codeField.value === '777') {
          $form.classList.add('binking__hide')
          $success.classList.remove('binking__hide')
          $submitButton.classList.remove('binking__loading')
        } else {
          var bankInfo = selectedCardIndex !== null ? savedCardsBanks[selectedCardIndex] : newCardInfo || null
          $error.innerHTML = bankInfo && bankInfo.bankPhone ?
            'Your bank has declined the transaction by the specified card. Call to ' + bankInfo.bankLocalName + ' by number ' + bankInfo.bankPhone + ', in order to remove the causes.' :
            'Your bank has declined the transaction by the specified card.'
          $error.classList.remove('binking__hide')
        }
      }, 1000)
    }
  
    function resetButtonClickHandler() {
      resetForm()
    }
  
    var $form = document.querySelector('.binking__form')
    var $newCardForm = document.querySelector('.binking__new-card-form')
    var $success = document.querySelector('.binking__success')
    var $submitButton = document.querySelector('.binking__submit-button')
    var $resetButton = document.querySelector('.binking__reset-button')
    var $frontPanel = document.querySelector('.binking__front-panel')
    var $bankLogo = document.querySelector('.binking__form-bank-logo')
    var $brandLogo = document.querySelector('.binking__form-brand-logo')
    var $cardNumberField = document.querySelector('.binking__number-field')
    var $codeField = document.querySelector('.binking__code-field')
    var $monthField = document.querySelector('.binking__month-field')
    var $yearField = document.querySelector('.binking__year-field')
    var $saveCardField = document.querySelector('.binking__save-card-checkbox')
    var $frontFields = document.querySelectorAll('.binking__front-fields .binking__field')
    var $savedCardsSection = document.querySelector('.binking__saved-cards')
    var $сardsList = document.querySelector('.binking__cards')
    var $error = document.querySelector('.binking__error')
    var prevNumberValue = $cardNumberField.value
    var prevMonthValue = $monthField.value
    var prevYearValue = $yearField.value
    var selectedCardIndex = null
    var cardNumberTouched = false
    var monthTouched = false
    var yearTouched = false
    var codeTouched = false
    var sending = false
    var savedCardsBanks
    var newCardInfo
    var cardNumberTip
    var monthTip
    var yearTip
    var codeTip
    var cardNumberMask
    var monthMask
    var yearMask
    var codeMask
    var savedCards = [{
      last4: 4421,
      bankAlias: 'us-chase',
      brandAlias: 'mastercard',
      expMonth: '04',
      expYear: '22'
    }, {
      last4: 8917,
      bankAlias: 'de-deutsche',
      brandAlias: 'visa',
      expMonth: '11',
      expYear: '23'
    }]
    initBinking()
    initMasks()
    initValidationTips()
    showSavedCards()
    $cardNumberField.addEventListener('input', cardNumberChangeHandler)
    $cardNumberField.addEventListener('blur', cardNumberBlurHandler)
    $monthField.addEventListener('input', monthChangeHandler)
    $monthField.addEventListener('blur', monthBlurHandler)
    $yearField.addEventListener('input', yearChangeHandler)
    $yearField.addEventListener('blur', yearBlurHandler)
    $codeField.addEventListener('input', codeChangeHandler)
    $codeField.addEventListener('blur', codeBlurHandler)
    $сardsList.addEventListener('click', savedCardsListClickHandler)
    $form.addEventListener('submit', formSubmitHandler)
    $resetButton.addEventListener('click', resetButtonClickHandler)
    $cardNumberField.focus()
  })();
  