"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Save, X, AlertCircle, Check, RotateCcw, Download } from "lucide-react";

interface DevEditorProps {
  data: Record<string, unknown>;
  onSave: (data: Record<string, unknown>) => void;
}

// 환경 변수는 빌드 타임에 결정됨
const IS_DEV = process.env.NODE_ENV === "development";

export function DevEditor({ data, onSave }: DevEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [editedJson, setEditedJson] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    setEditedJson(JSON.stringify(data, null, 2));
  }, [data]);

  const handleSave = useCallback(async () => {
    try {
      const parsed = JSON.parse(editedJson);
      setError(null);
      setSaveStatus("saving");

      // 개발 모드에서 API Route 호출 (route.dev.ts)
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: editedJson,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save");
      }

      onSave(parsed);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError("Invalid JSON format");
      } else {
        setError(e instanceof Error ? e.message : "Failed to save file");
      }
      setSaveStatus("error");
    }
  }, [editedJson, onSave]);

  const handleDownload = useCallback(() => {
    try {
      // JSON 유효성 검사
      JSON.parse(editedJson);
      
      // 파일 다운로드
      const blob = new Blob([editedJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setError(null);
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError("Invalid JSON format");
      }
    }
  }, [editedJson]);

  const handleReset = useCallback(() => {
    setEditedJson(JSON.stringify(data, null, 2));
    setError(null);
    setSaveStatus("idle");
  }, [data]);

  // 개발 모드가 아니면 렌더링하지 않음
  if (!IS_DEV) {
    return null;
  }

  return (
    <>
      {/* 편집 버튼 - 화면 우측 하단 고정 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        title="Edit Resume Data"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Edit className="h-6 w-6" />}
      </button>

      {/* 사이드바 에디터 */}
      {isOpen && (
        <div className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-xl flex-col border-l bg-background shadow-xl">
          {/* 헤더 */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Resume Data Editor</h2>
            <div className="flex items-center gap-2">
              {saveStatus === "saved" && (
                <span className="flex items-center gap-1 text-sm text-green-600">
                  <Check className="h-4 w-4" /> Saved!
                </span>
              )}
              {error && (
                <span className="flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" /> {error}
                </span>
              )}
              <Button
                onClick={handleReset}
                variant="outline"
                size="sm"
                title="Reset to original"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                size="sm"
                title="Download JSON"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleSave}
                disabled={saveStatus === "saving"}
                size="sm"
              >
                <Save className="mr-2 h-4 w-4" />
                {saveStatus === "saving" ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>

          {/* JSON 에디터 */}
          <div className="flex-1 overflow-hidden p-4">
            <textarea
              value={editedJson}
              onChange={(e) => {
                setEditedJson(e.target.value);
                setError(null);
                setSaveStatus("idle");
              }}
              className="h-full w-full resize-none rounded-md border bg-muted p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              spellCheck={false}
            />
          </div>

          {/* 안내 메시지 */}
          <div className="border-t px-4 py-3 text-xs text-muted-foreground">
            <p>⚠️ This editor is only available in development mode.</p>
            <p>💾 Save 버튼을 누르면 <code>src/data/resume.json</code>에 직접 저장됩니다.</p>
          </div>
        </div>
      )}
    </>
  );
}
