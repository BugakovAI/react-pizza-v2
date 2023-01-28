import React from 'react';
import styles from './SearchBlock.module.scss';
import { SearchContext } from '../../App'; //дест

const SearchBlock = () => {
  const { searchText, setSearchText } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img
        alt="search"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nN2VO07DQBCGl1NAAFGSQAun4gBRFBRayhwCsPk/e6FEiJpwBZ4tiDJEgioYjVhE5CJ+RKbgl1ysPTvfzuzM2Ll/rTRNO8A+EEm6BE6BbhzHWws5BjaAMyADpsAtMALubC3pU5KPomi1svMkSXYlvQJjSf0oipZnv9s6RDUGXoCd0s699+vB+WMcx5sFUbYlPUl6tn2lAMC5nazIee6OJpJwRQK2Q277hcYzAg5sn8HcPAE9u8B8zovkvW+FQujNNZQUW5W4GgIegJMiowtJ1zUBI+uTuUaSjutGIOneMtD0HXRdibr+tCaqApA0KFVFwZjQoe2KfeBLncY60trfOrQIkqZpJ9i9V5pJNlsC5M3CB1Zyh2iF9xPgwwaipGFpQICsAUm4k2mYojdWLWFtTxJgw1qQmRz3gCPgyv4LVi359C0EKSvg8AeSZdmSa0L6jWTQCMB9Q/rAXmOAP9cXqLlgM7aTSbkAAAAASUVORK5CYII="
      />
      <input
        type="text"
        name="name"
        placeholder="Найти пиццу"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBlock;
