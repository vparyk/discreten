"use client";

import { useState } from "react";
import TextLink from "./base/Link";

const categories = [
  "Klasszikus coaching",
  "Társasjáték coaching",
  "Coaching a szabadban",
  "D20 coaching",

  "On the SUP coaching",
  "Verses coaching",
  "Zenés coaching",
];

type ApplyFormProps = {
  initialSelected?: string;
};

export default function ApplyForm({ initialSelected }: ApplyFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialSelected && categories.includes(initialSelected)
      ? [initialSelected]
      : []
  );
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, problem, categories: selectedTags }),
    });

    setSubmitting(false);
    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setProblem("");
      setSelectedTags(initialSelected ? [initialSelected] : []);
    } else {
      setError(
        "Hiba történt a levelező szerver oldalon. Kérlek próbáld emailben felvenni a kapcsolatot:"
      );
    }
  };

  return (
    <div>
      {success ? (
        <div className="lg:max-w-[1043px] mx-auto px-6 xl:p-2 space-y-6 flex flex-col my-7">
          <div className="text-green-800 p-6 rounded-lg text-center">
            <p className="text-lg text-rosemary font-semibold text-center mt-4">
              Köszönjük a jelentkezést!
            </p>
            <p className="text-lg text-rosemary font-semibold text-center mt-2">
              Hamarosan felvesszük veled a kapcsolatot.
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="lg:max-w-[1043px] mx-auto px-6 xl:p-2 space-y-6 flex flex-col my-7"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-ground">
              Név
            </label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-3 focus:ring-rosemary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-ground">
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-3 focus:ring-rosemary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-ground">
              Elakadás, amivel szeretnék dolgozni
            </label>
            <textarea
              value={problem}
              required
              onChange={(e) => setProblem(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rosemary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-ground">
              Kategóriák
            </label>
            <div className="flex flex-wrap gap-2  xl:justify-between">
              {categories.map((cat) => {
                const selected = selectedTags.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleTag(cat)}
                    className={`px-3 py-1 rounded-lg text-sm border transition ${
                      selected
                        ? "bg-rosemary text-white border-rosemary"
                        : "bg-white text-gray-800 border-1 border-rosemary hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-rosemary text-white font-semibold px-5 py-2 rounded-lg hover:bg-ground transition disabled:opacity-50 mx-auto"
          >
            {submitting ? "Küldés..." : "Jelentkezem"}
          </button>

          {error && (
            <div className="mt-4 p-4 text-red-800 rounded text-sm">
              {error}{" "}
              <TextLink
                href="mailto:discreten@gmail.com"
                className="text-white underline"
              >
                discretencoaching@gmail.com
              </TextLink>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
