function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Про мене</h1>

      <p className="mb-4">
        Мене звати Григорій. Я студент та початківець frontend-розробник,
        який активно вивчає React та сучасні веб-технології.
      </p>

      <p className="mb-4">
        Мені подобається створювати зручні та красиві інтерфейси,
        працювати з логікою додатків та постійно вдосконалювати свої навички.
      </p>

      <h2 className="text-xl font-semibold mt-6">Мої цінності</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Постійний розвиток і навчання</li>
        <li>Відповідальність за результат</li>
        <li>Практика та самодисципліна</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Навички</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>HTML, CSS</li>
        <li>JavaScript (основи)</li>
        <li>React (components, props, hooks)</li>
        <li>Git та GitHub</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Мої проєкти</h2>

      <div className="mt-4">
        <p className="font-bold">HTML + CSS</p>
        <a className="text-blue-500" href="https://github.com/ArtemYakovets/ukrzaliznytsia">Проєкт</a>
      </div>

      <div className="mt-4">
        <p className="font-bold">JavaScript</p>
        <a className="text-blue-500" href="https://github.com/GregoryLysovets/js-DOM2">JS проєкт</a>
      </div>

      <div className="mt-4">
        <p className="font-bold">React</p>
        <a className="text-blue-500" href="https://github.com/GregoryLysovets/react-second-lab">React проєкт</a>
      </div>
    </div>
  );
}

export default AboutMe;