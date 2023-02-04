import { useContext, useRef, useCallback, useState } from 'react';
import styles from './SearchBlock.module.scss';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

const SearchBlock = () => {
  const { searchText, setSearchText, setIsLoading } = useContext(SearchContext);
  const [searchTextLocal, setSearchTextLocal] = useState(searchText);
  const inputRef = useRef();

  const clearInput = () => {
    setSearchText('');
    setSearchTextLocal('');
    inputRef.current.focus();
  };

  const changeInput = useCallback(
    debounce((value) => {
      setSearchText(value);
      setIsLoading(false);
    }, 500),
    [],
  );

  const onChangeInput = (value) => {
    setIsLoading(true);
    changeInput(value);
    setSearchTextLocal(value);
  };

  return (
    <div className={styles.root}>
      <img
        alt="search"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nN2VO07DQBCGl1NAAFGSQAun4gBRFBRayhwCsPk/e6FEiJpwBZ4tiDJEgioYjVhE5CJ+RKbgl1ysPTvfzuzM2Ll/rTRNO8A+EEm6BE6BbhzHWws5BjaAMyADpsAtMALubC3pU5KPomi1svMkSXYlvQJjSf0oipZnv9s6RDUGXoCd0s699+vB+WMcx5sFUbYlPUl6tn2lAMC5nazIee6OJpJwRQK2Q277hcYzAg5sn8HcPAE9u8B8zovkvW+FQujNNZQUW5W4GgIegJMiowtJ1zUBI+uTuUaSjutGIOneMtD0HXRdibr+tCaqApA0KFVFwZjQoe2KfeBLncY60trfOrQIkqZpJ9i9V5pJNlsC5M3CB1Zyh2iF9xPgwwaipGFpQICsAUm4k2mYojdWLWFtTxJgw1qQmRz3gCPgyv4LVi359C0EKSvg8AeSZdmSa0L6jWTQCMB9Q/rAXmOAP9cXqLlgM7aTSbkAAAAASUVORK5CYII="
      />
      <input
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Найти пиццу"
        value={searchTextLocal}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {searchText && (
        <img
          onClick={() => {
            clearInput();
          }}
          alt="delete"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAadJREFUaEPtmMtKBEEMRc+gv+dCUMQH6peJgg9Edy79MkFBIt3So93TqcrNSGPVcqhJ35NbVQlZsfC1Wrh+GsBfO9gcaA4EM9COUDCB4b//Owd2gCvgFbgNp289wCGwD5wD797YJQ6Y+BvgFPgALoUQJv4e2AWegWMvRAmAZdzE98uydAY8erM1se+oS4SJ79ddF3s2dAnAAfDQZakPHHVimPlhzAvAIGZXCYAFU0KExZugUgAVhER8LUAUQiY+AlALIRUfBSiFkItXAHghUsSrAOYg3gZFquqp3PSW1rxCU/HGClLfEgyLlKoAfulQAkw5MQS2wucuUrNVLAFgE4RcfIYDFnPswtrv0bZj1BD1EZoSr+qdfkEoARZ9iTe98/aMqrvYbycUDniKlLKLXTtGUQCP+P6DKRARgBLxaRC1ADXiUyBqACLi5RClAArxUogSAKV4GUQJwOLHKjbYuu7mNerGbPjEPgEnGYMts936eoN4EQy0fvY11orsdRO/lNGipz3f+p6SO7B1cZ4PNgBPljL3NAcys+uJ3RzwZClzT3MgM7ue2J/WSpIxucD7/AAAAABJRU5ErkJggg=="
        />
      )}
    </div>
  );
};

export default SearchBlock;
