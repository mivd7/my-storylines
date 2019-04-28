export const checkSubmitStatus = status => {
  if (status === false)
    window.location.reload()
  else 
    return;
}