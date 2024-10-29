import { Button } from "./ui/button"
import { Input } from "./ui/input"

type FormProps = {
    setMealName: React.Dispatch<React.SetStateAction<string>>
    getMealData: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const Form = ({ setMealName, getMealData }: FormProps) => {

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMealName(e.target.value)
    }

    return (
        <div className="flex">
            <form
                className="flex space-x-2"
                onSubmit={(e) => getMealData(e)}>
                <Input
                    type="text"
                    placeholder="料理名を英語で検索"
                    onChange={(e) => handleInput(e)} />
                <Button
                    type="submit">検索</Button>
            </form>
        </div>
    )
}
export default Form
