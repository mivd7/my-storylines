export const checkSubmitStatus = status => {
  if (status === true)
    window.location.reload()
  else 
    return;
}