import {
  COMPLITE_AUTH,
  ERROR_AUTH,
  AUTH_ACTION_START,
  AUTH_ACTION_END,
  LOG_OUT
} from "./types";

const logOutAC = () => {
  return {
    type: LOG_OUT
  };
};

const authStartAC = () => {
  return {
    type: AUTH_ACTION_START
  };
};

const authEndAC = () => {
  return {
    type: AUTH_ACTION_END
  };
};

const errorAuthAC = data => {
  return {
    type: ERROR_AUTH,
    payloadError: data
  };
};

const compliteAuthAC = () => {
  return {
    type: COMPLITE_AUTH
  };
};

export const authFuncAC = formData => {
  const authData = "demo"; // Можно было бы сделать имитацию бэка через json, но я думаю в данной задаче в этом нет необходимости

  return async dispatch => {
    dispatch(authStartAC());

    const res = new Promise((resolve, reject) => {
      setTimeout(() => {
        //...имитация отправки запроса через fetch
        //...тут же использую стандартную обаботку на беке, так как лень что-то мудрить
        //...эта ерунда опять разрослась, можно было бы написать хуков для оптимизации пространства, но это тестовое задание, по этому мне лень, простите
        if (formData.login === authData) {
          if (formData.password === authData) {
            resolve(JSON.stringify({ status: true }));
          } else {
            resolve(
              JSON.stringify({
                status: false,
                answerd: "wrong password",
                type: "password"
              })
            );
          }
        } else {
          resolve(
            JSON.stringify({
              status: false,
              answerd: "wrong login",
              type: "login"
            })
          );
        }
      }, 1000);
    });

    const dataJson = await res;
    const data = JSON.parse(dataJson);

    if (data.status) {
      dispatch(compliteAuthAC());
    } else {
      if (data.type === "login") {
        dispatch(
          errorAuthAC({
            password: null,
            login: data.answerd
          })
        );
      } else {
        dispatch(
          errorAuthAC({
            password: data.answerd,
            login: null
          })
        );
      }
    }

    dispatch(authEndAC());
  };
};

export const logOutFunctionAC = () => {
  return async dispatch => {
    dispatch(authStartAC());
    const logOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    await logOut;
    dispatch(logOutAC());
    dispatch(authEndAC());
  };
};
//если к окончанию изучения тестов останется время и желание, то поищу способ все это структуризировать(НО ЭТО НЕ ТОЧНО!!!!!)
