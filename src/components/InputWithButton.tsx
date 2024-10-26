import { Button } from "./ui/button"
import { Input } from "./ui/input"

const InputWithButton = () => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="料理名を英語で検索" />
            <Button type="submit">検索</Button>
        </div>
    )
}

export default InputWithButton
