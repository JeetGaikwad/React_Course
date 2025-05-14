import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <div>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept {...conceptItem} key={conceptItem.title} />
          ))}
          {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
      </section>
    </div>
  );
}
