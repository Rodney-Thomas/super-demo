function s(selector)
{
  const self =
  {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on:(event, callback)=>{
      document.addEventListener(event, callback)
    },
    hide: ()=>{
      self.element.style.display = "none"
    },
    show: ()=>{
      self.element.style.display = "inline"
    },
    attr:(name, value)=>{
      if(value == null) 
        self.element.getAttribute(name)
      else
        self.element.setAttribute(name,value)
    },
    center:()=>{
      self.element.style.textAlign = "center"
    },
    right:()=>{
      self.element.style.textAlign = "right"
    },
    left:()=>{
      self.element.style.textAlign = "left"
    },
    basic:()=>{
      self.element.style.fontFamily = "arial"
    }
  }
  
  return self
}
