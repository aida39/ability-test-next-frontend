import Image from 'next/image';
import "../../styles/admin.css";

export default function AdminPage() {
    return (
        <>
            <div className="admin__container">
                <div className="admin__heading">
                    <h1>Admin</h1>
                </div>
                <div className="admin__content">
                    <div className="admin__search">
                        <form className="admin__form" >
                            <div className="admin__form__item">
                                <div className="admin__form__input-area">
                                    <input className="admin__form__item-keyword" type="search"
                                        name="keyword" placeholder="名前やメールアドレスを入力してください" />
                                    <button className="admin__form__button" type="submit">
                                        <Image src="/icon.png" alt="search-icon" width="32" height="32" />
                                    </button>
                                </div>
                                <select className="admin__form__item-gender" name="gender">
                                    <option value="">性別</option>
                                    <option value="">全て</option>
                                    <option value="1">男性</option>
                                    <option value="2">女性</option>
                                    <option value="3">その他</option>
                                </select>
                                <select className="admin__form__item-category" name="category_id">
                                    <option value="">お問い合わせの種類</option>
                                    {/* <option v-for="category in categoryLists" :key="category.id" :value="category.id">{{
                                category.content }}
                            </option> */}
                                </select>
                                <input className="admin__form__item-date" type="date"
                                    name="created_at" />
                            </div>
                        </form>
                    </div>
                    <div className="admin__function">
                        <div className="admin__function-export">
                            <button className="download-button">エクスポート</button>
                        </div>
                        <div className="pagination">
                            <button >
                                {/* {{ page }} */}
                            </button>
                        </div >
                    </div >
                    <div className="admin__table">
                        <table className="admin__table__inner">
                            <tbody>
                                <tr className="admin__table__row">
                                    <th className="admin__table__header">お名前</th>
                                    <th className="admin__table__header">性別</th>
                                    <th className="admin__table__header">メールアドレス</th>
                                    <th className="admin__table__header">お問い合わせの種類</th>
                                    <th className="admin__table__header"></th>
                                </tr>

                                <tr className="admin__table__row">
                                    <td className="admin__table__text">
                                        {/* {{ contact.last_name }} */}
                                        {/* {{ contact.first_name }} */}
                                    </td>
                                    <td className="admin__table__text">
                                        {/* {{ getGenderText(contact.gender) }} */}
                                    </td>
                                    <td className="admin__table__text admin__table__text-email">
                                        {/* {{ contact.email }} */}
                                    </td>
                                    <td className="admin__table__text">
                                        {/* {{ contact.category.content }} */}
                                    </td>
                                    <td className="admin__table__text">
                                        <button className="modal-button">
                                            詳細
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <form>
                <div className="button__area">
                    <button className="common-button">リセット</button>
                </div>
            </form >

            {/* <div id="overlay" >
            <div id="content" className="delete__container" >
                <div className="back-button">
                    <span>×</span>
            </div >
            <table className="delete__table">
                <tr className="delete__table__row">
                    <th className="delete__table__header">お名前</th>
                    <td>{{ selectedContact.last_name }} {{ selectedContact.first_name }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">性別</th>
                    <td>{{ getGenderText(selectedContact.gender) }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">メールアドレス</th>
                    <td> {{ selectedContact.email }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">電話番号</th>
                    <td>{{ selectedContact.tell }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">住所</th>
                    <td>{{ selectedContact.address }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">建物名</th>
                    <td> {{ selectedContact.building }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">お問い合わせの種類</th>
                    <td> {{ selectedContact.category.content }}</td>
                </tr>
                <tr className="delete__table__row">
                    <th className="delete__table__header">お問い合わせ内容</th>
                    <td>{{ selectedContact.detail }}</td>
                </tr>
            </table>
            <form @submit.prevent="submitForm" >
        <div className="button__area">
            <button @click="deleteContact(selectedContact.id)" className="delete-button" type="submit">削除</button>
                </div >
            </form >
        </div >
    </div > */}
        </>

    );
}