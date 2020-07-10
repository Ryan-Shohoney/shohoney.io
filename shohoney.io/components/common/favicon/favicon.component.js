function Favicon () {
  const icos = [];
  icos.push({rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png'});
  icos.push({rel: 'icon', sizes: '32x32', href:'/favicon-32x32.png'});
  icos.push({rel: 'icon', sizes: '16x16', href:'/favicon-16x16.png'});
  icos.push({rel: 'manifest', href:'/site.webmanifest'});  
 
  return (
    <>
      {icos.map((ico, ind) => (<link key={ind} {...ico} />))}
    </>
  )
}

export default Favicon;