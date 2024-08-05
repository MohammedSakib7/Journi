export default function Preference(){
    return(
        <div>
            <h1>Preference</h1>
            <form>
                <label>
                    <input type="radio" value="1" name="preference" />
                    Preference 1
                </label>
                <label>
                    <input type="radio" value="2" name="preference" />
                    Preference 2
                </label>
                <label>
                    <input type="radio" value="3" name="preference" />
                    Preference 3
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}