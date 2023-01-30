import React from 'react';
import { useProduct } from 'vtex.product-context'
// import { Container } from './styles';

const SearchOrigemStyle = () => {
  const productContextValue = useProduct()
  const selos = productContextValue?.product?.clusterHighlights
  return (
    <div className='vtex-CollectionCustom' style={{marginLeft:"24%", display:'flex', flexDirection:"row", marginTop:"2%", gap:"10px"}}>
      {
        selos?.map((e) => {
          return(<div className='collection'>
          <img src={`https://mercadaodosoculosb2b.vtexassets.com/arquivos/${e.id}.png`} height={24} alt="" />
        </div>);
        })
      }
    </div>
  );
}

export default SearchOrigemStyle;
