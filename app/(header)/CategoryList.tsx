type Category = {
    id: number;
    content: string;
    created_at: string | null;
    updated_at: string | null;
};

const CategoryList = async () => {
    const response = await fetch('http://127.0.0.1:80/api/');
    if (!response.ok) throw new Error('Failed to fetch data');
    const { data } = await response.json();

    if (!Array.isArray(data)) {
        console.error('Received data is not an array:', data);
        return <p>データの取得に問題がありました。</p>;
    }

    const categories: Category[] = data;

    return (
        <>
            <option value="">選択してください</option>
            {
                categories.map((category: Category) => (
                    <option key={category.id} value={category.id} > {category.content}
                    </option>
                ))
            }
        </>
    );
};

export default CategoryList;