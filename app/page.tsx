import Link from 'next/link';
import "./styles/index.css";

export default function Home() {
  return (
    <div className="">
      <div className="contact-form__content">
        <div className="contact-form__heading">
          <h1>Contact</h1>
        </div>
        <div className="form">
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">お名前</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--name">
                <input type="text" name="last_name" placeholder="例: 山田" />
                <input type="text" name="first_name" placeholder="例: 太郎" />
              </div>
            </div>
          </div>
          <div className="error-message">
            {/* {{ errors.lastName }}
            {{ errors.firstName }} */}
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">性別</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--radio">
                <input type="radio" id="male" name="gender" value="1" />
                <label >男性</label>
              </div>
              <div className="form__input--radio">
                <input type="radio" id="female" name="gender" value="2" />
                <label >女性</label>
              </div>
              <div className="form__input--radio">
                <input type="radio" id="others" name="gender" value="3" />
                <label >その他</label>
              </div>
            </div>
          </div>
          <div className="error-message">
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">メールアドレス</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--text">
                <input type="email" name="email" placeholder="例: test@example.com" />
              </div>
            </div>
          </div>
          <div className="error-message">
            {/* {{ errors.email }} */}
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">電話番号</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--tel">
                <input type="tel" name="tell-first" placeholder="080" />
                <span>-</span>
                <input type="tel" name="tell-second" placeholder="1234" />
                <span>-</span>
                <input type="tel" name="tell-third" placeholder="5678" />
              </div>
            </div>
          </div>
          <div className="error-message" >
            {/* {{ getTellError() }} */}
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">住所</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--text">
                <input type="text" name="address" placeholder="例: 東京都渋谷区千駄ヶ谷1-2-3" />
              </div>
            </div>
          </div>
          <div className="error-message">
            {/* {{ errors.address }} */}
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">建物名</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--text">
                <input type="text" name="building" placeholder="例: 千駄ヶ谷マンション101" />
              </div>
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <span className="form__label--item">お問い合わせの種類</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--text">
                <select name="category_id" >
                  <option value="">選択してください</option>
                  {/* <option v-for="category in categoryLists" :key="category.id" :value="category">
                  {{ category.content }}
                </option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="error-message">
          </div>
          <div className="form__group form__group--textarea">
            <div className="form__group-title">
              <span className="form__label--item">お問い合わせ内容</span>
              <span className="form__label--required">※</span>
            </div>
            <div className="form__group-content">
              <div className="form__input--text">
                <textarea className="form__input--textarea" name="detail"
                  placeholder="お問い合わせ内容をご記載ください"></textarea>
              </div>
            </div>
          </div>
          <div className="error-message">
            {/* {{ errors.detail }} */}
          </div>
          <div className="button__area">
            <Link className="common-button" href="/confirm">
            確認画面
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
}
