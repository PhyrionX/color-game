import * as React from "react";

export interface LoadingProps {
  loading: boolean;
}

export const Loading: React.StatelessComponent<LoadingProps> = (props) => {

  return (
    <div className={`page ${props.loading ? '' : 'hide'}`}>
      <img src="assets/gifs/loadings_blocks.gif"/>
    </div>
  )
}